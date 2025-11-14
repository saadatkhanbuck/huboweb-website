"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface DashboardData {
  mainPanel: {
    title: string;
    subtitle: string;
    image: string;
    description: string;
  };
  widgets: {
    title: string;
    image: string;
    description: string;
  }[];
  activities: {
    avatar: string;
    username: string;
    date: string;
    activity: string;
  }[];
  sidebar: {
    user: {
      avatar: string;
      name: string;
      role: string;
    };
    shortcuts: string[];
    recentActivities: string[];
  };
}

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    fetch("/data/dashboardPages.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error loading dashboard JSON:", err));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="container mt-20 mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-transparent text-white">
      {/* Left / Main Panel */}
      <div className="md:col-span-2 space-y-6">
        <div>
          <Image
            src={data.mainPanel.image}
            alt={data.mainPanel.title}
            width={1200}
            height={600}
            className="rounded-xl w-full h-auto"
          />
          <h1 className="text-3xl font-bold mt-4">{data.mainPanel.title}</h1>
          <p className="text-white mt-2">{data.mainPanel.subtitle}</p>
          <p className="text-gray-400">{data.mainPanel.description}</p>
        </div>

        {/* Widgets Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {data.widgets.map((widget, idx) => (
            <div key={idx} className="p-4 border rounded-xl bg-gray-900">
              <Image
                src={widget.image}
                alt={widget.title}
                width={600}
                height={400}
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-2">{widget.title}</h3>
              <p className="text-gray-400">{widget.description}</p>
            </div>
          ))}
        </div>

        {/* Activities / Feed */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
          {data.activities.map((activity, i) => (
            <div key={i} className="flex gap-4 items-center p-2 border-b border-gray-700">
              <Image
                src={activity.avatar}
                alt={activity.username}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h4 className="font-medium">{activity.username}</h4>
                <p className="text-gray-400 text-sm">{activity.date}</p>
                <p className="text-white text-sm">{activity.activity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="space-y-6">
        {/* User */}
        <div className="p-4 border rounded-xl text-center border-gray-700">
          <Image
            src={data.sidebar.user.avatar}
            alt={data.sidebar.user.name}
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
          <h3 className="text-white text-2xl font-semibold mt-2">{data.sidebar.user.name}</h3>
          <p className="text-gray-400">{data.sidebar.user.role}</p>
        </div>

        {/* Shortcuts */}
        <div className="p-4 border rounded-xl border-gray-700">
          <h3 className="text-xl font-bold mb-3">Shortcuts</h3>
          {data.sidebar.shortcuts.map((item, i) => (
            <p key={i} className="text-white cursor-pointer hover:text-gray-300">{item}</p>
          ))}
        </div>

        {/* Recent Activities */}
        <div className="p-4 border rounded-xl border-gray-700">
          <h3 className="text-xl font-bold mb-3">Recent Activities</h3>
          {data.sidebar.recentActivities.map((item, i) => (
            <p key={i} className="text-white text-sm cursor-pointer hover:text-gray-300">{item}</p>
          ))}
        </div>
      </aside>
    </div>
  );
}
