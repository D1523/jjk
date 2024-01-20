"use client"
import BusinessList from "@/components/BusinessList";
import CategoryList from "@/components/CategoryList";
import SearchBar from "@/components/SearchBar";
import SideNavBar from "@/components/SideNavBar";
import GlobalApi from "@/services/GlobalApi";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  useEffect(()=>{
    getNearByPlace();
  },[])

  const getNearByPlace=()=>{
    GlobalApi.getNearByPlace('gas_station','35.5827712','-808484864')
    .then(resp=>{
      console.log(resp);
    })
  }
  return (
    <div className="flex">
      <SideNavBar />

      <div className="grid grid-cols-1
       md:grid-cols-2 px-6 md:px-10 w-full mt-10 gap-9">
        <div>
          <SearchBar/>
          <CategoryList/>
          <BusinessList/>
          </div>
        <div>Google MAP</div>
      </div>
    </div>
  );
}
