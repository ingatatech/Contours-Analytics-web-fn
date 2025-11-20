'use client'
import React, { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Users,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  User,
  Package,
  Handshake,
  Settings,
  LogOut,
  Tags,
  Newspaper,
  Inbox,
  MessageSquareQuote,
  UserCheck,
  Briefcase,
  AwardIcon,
} from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ProfileModal from "./ProfileSettings";
import {useRouter } from "next/navigation";
import { fetchCurrentUser } from "@/lib/api";
import Link from "next/link";
interface ExpandedSectionsState {
  overall: boolean;
  services: boolean;
  content: boolean;
  users: boolean;
}

export default function AdminLayoutStructure({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] =
    useState<ExpandedSectionsState>({
      overall: true,
      services: false,
      content: false,
      users: false,
    });
  const [currentUser, setCurrentUser] = useState<{ name: string } | null>(null);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const toggleSection = (section: keyof ExpandedSectionsState) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sidebarSections = [
    {
      id: "overall",
      title: "Overall",
      icon: LayoutDashboard,
      children: [{ title: "Dashboard", href: "/admin", icon: LayoutDashboard }],
    },
     {id: "services",
      title: "Services",
      icon: Briefcase,
      children: [
        {
          title: "Main Service",
          href: "/admin/main-services",
          icon: Briefcase,
        },
        { title: "Sub-Services", href: "/admin/services", icon: Package },
      ],
    },
    {
      id: "content",
      title: "Contents",
      icon: Newspaper,
      children: [
        { title: "Insights", href: "/admin/insights", icon: Newspaper },
     
        {
          title: "Contact Messages",
          href: "/admin/contact-messages",
          icon: Inbox,
        },
      ],
    },
    {
      id: "users",
      title: "Leaders",
      icon: Users,
      children: [
        { title: "Leaders", href: "/admin/leaders", icon: Users },
        { title: "Partners", href: "/admin/partners", icon: Handshake },
        { title: "Subscribers", href: "/admin/subscribers", icon: UserCheck },
      ],
    },
  ];
 const router = useRouter();
 useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/admin/login");
      } else {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          try {
            setCurrentUser(JSON.parse(storedUser));
          } catch {
            // If stored user is invalid, fetch from API
            fetchCurrentUser()
              .then((user) => setCurrentUser(user))
              .catch(() => {
                // If fetch fails, redirect to login
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                router.push("/admin/login");
              });
          }
        } else {
          // Fetch user data if not in localStorage
          fetchCurrentUser()
            .then((user) => setCurrentUser(user))
            .catch(() => {
              localStorage.removeItem("token");
              router.push("/admin/login");
            });
        }
      }
    }
  }, [router]);

  function handleLogout() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push("/admin/login");
    }
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-2xl border-r border-slate-200 flex flex-col transform transition-all duration-500 ease-in-out overflow-hidden
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          overflow-y-auto h-screen
        `}
      >
        {/* Header Section */}
        <div className="relative bg-gradient-to-br from-slate-50 to-white border-b border-slate-200">
          <div className="p-4">
            {/* Top Row - Logo and Close Button */}
            <div className="flex items-center justify-between mb-2">

              
                       <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jpeg"
                alt="Contours Analytics"
                width={200}
                height={80}
                className="h-12 w-auto"
              />
            </Link>
          </motion.div>
              

              {/* Close Button for Mobile */}
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

           
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {sidebarSections.map((section) => (
            <div key={section.id}>
              <button
                onClick={() =>
                  toggleSection(section.id as keyof ExpandedSectionsState)
                }
                className={`w-full flex items-center justify-between px-3 py-3 text-sm font-medium rounded-xl transition-all duration-300
                  ${
                    expandedSections[section.id as keyof ExpandedSectionsState]
                      ? "bg-gradient-to-r from-blue-500/10 to-blue-600/5 text-blue-700 border-l-2 border-blue-500"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }
                `}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    expandedSections[section.id as keyof ExpandedSectionsState]
                      ? "bg-blue-100 text-blue-600"
                      : "bg-slate-100 text-slate-600"
                  }`}>
                    <section.icon className="h-4 w-4" />
                  </div>
                  <span>{section.title}</span>
                </div>
                {expandedSections[section.id as keyof ExpandedSectionsState] ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>

              {/* Submenu */}
              {expandedSections[section.id as keyof ExpandedSectionsState] && (
                <div className="ml-4 mt-2 space-y-1 border-l border-slate-200">
                  {section.children.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="group relative flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-300 font-medium text-sm text-slate-600 hover:text-blue-700 hover:bg-blue-50 ml-2"
                    >
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <item.icon className="h-4 w-4 text-slate-500 group-hover:text-blue-600 transition-colors" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

     
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Topbar */}
        <header className="bg-white border-b border-slate-100 shadow-sm backdrop-blur-xl bg-opacity-80">
          <div className="flex items-center justify-between px-4 lg:px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-slate-600 hover:text-blue-600 p-2 rounded-lg hover:bg-slate-100 transition-all duration-300"
              >
                <Menu className="h-5 w-5" />
              </button>

              <div className="hidden lg:flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl">
                <span className="text-sm font-medium text-slate-600">Admin Dashboard</span>
              </div>
            </div>

            {/* User Profile Section */}
            <div className="relative group">
              {/* User Info Card */}
              <div className="flex items-center space-x-3 px-3 py-2 transition-all duration-300 cursor-pointer rounded-lg hover:bg-slate-50">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md ring-2 ring-white">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                </div>

                {/* User Details */}
                <div className="hidden sm:flex flex-1 min-w-0 flex-col">
                  <span className="text-sm font-semibold text-gray-900 truncate">
                    {currentUser?.name || "Admin User"}
                  </span>
                  <span className="text-xs text-gray-500">Administrator</span>
                </div>

                {/* Dropdown Arrow */}
                <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-all duration-300 group-hover:rotate-180" />
              </div>

              {/* Dropdown Menu */}
              <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-200/80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right scale-95 group-hover:scale-100 z-50">
                {/* Header */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{currentUser?.name || "Admin"}</p>
                      <p className="text-xs text-gray-500">Administrator</p>
                    </div>
                  </div>
                </div>

                {/* Options */}
                <div className="p-2 space-y-1">
                  <button
                    onClick={() => setShowProfileModal(true)}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-200 group/item"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 group-hover/item:bg-blue-100 transition-colors">
                      <Settings className="h-4 w-4 text-gray-600 group-hover/item:text-blue-600 transition-colors" />
                    </div>
                    <div className="text-left">
                      <span className="font-medium block">Account Settings</span>
                      <p className="text-xs text-gray-500">Manage your profile</p>
                    </div>
                  </button>

                  <div className="h-px bg-gray-100 mx-2"></div>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 group/item"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-50 group-hover/item:bg-red-100 transition-colors">
                      <LogOut className="h-4 w-4 text-red-500 group-hover/item:text-red-600 transition-colors" />
                    </div>
                    <div className="text-left">
                      <span className="font-medium block">Sign Out</span>
                      <p className="text-xs text-red-400">End your session</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-50">
          <div className="p-4 lg:p-8">
            {children || (
              <div className="text-center py-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  Your content goes here
                </h2>
                <p className="text-slate-600">
                  This is just the layout structure with sidebar and navbar.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <AnimatePresence>
        {showProfileModal && (
          <ProfileModal onClose={() => setShowProfileModal(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}