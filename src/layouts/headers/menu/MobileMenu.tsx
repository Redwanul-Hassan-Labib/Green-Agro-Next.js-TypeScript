"use client";
import Image from "next/image";
import Link from "next/link";
import menu_data from "@/data/menu_data";
import React, { useState } from "react";

export default function MobileMenu() {
	const [navTitle, setNavTitle] = useState("");
	//openMobileMenu
	const openMobileMenu = (menu: string) => {
		if (navTitle === menu) {
			setNavTitle("");
		} else {
			setNavTitle(menu);
		}
	};

	return (
		<>
			<div className="mean-bar">
				<nav className="mean-nav">
					<ul>
						{menu_data.map((item, i) => (
							<li
								key={i}
								className={`has-dropdown menu-thumb ${
									navTitle === item.title ? "dropdown-opened" : ""
								}`}
							>
								<Link href={item.link}>
									{item.title} 
								</Link>
								{item.img_dropdown && (
									<ul
										className="submenu has-homemenu"
										style={{
											display: navTitle === item.title ? "block" : "none",
										}}
									>
										<li>
											<div className="homemenu-items">
												{item.sub_menus?.map((sub_menu, index) => (
													<div key={index} className="homemenu">
														<div className="homemenu-thumb">
															<Image src={sub_menu.demo_img || ''} alt="img" />
															<div className="demo-button">
																<Link
																	href={sub_menu.link}
																	className="theme-btn p5-bg"
																>
																	<span>{sub_menu.title}</span>
																</Link>
															</div>
														</div>
														<div className="homemenu-content text-center">
															<h4 className="homemenu-title">
																Home Version 0{index + 1}
															</h4>
														</div>
													</div>
												))}
											</div>
										</li>
									</ul>
								)}

								{item.has_dropdown && (
									<ul
										className="submenu"
										style={{
											display: navTitle === item.title ? "block" : "none",
										}}
									>
										{item.sub_menus?.map((sub_menu, index) => (
											<li key={index}>
												<Link href={sub_menu.link}>{sub_menu.title}</Link>
											</li>
										))}
									</ul>
								)}

								{item.has_dropdown || item.img_dropdown ? (
									<a
										className={`mean-expand ${
											navTitle === item.title ? "mean-clicked" : ""
										}`}
										style={{ cursor: "pointer" }}
										onClick={() => openMobileMenu(item.title)}
									>
										<i className="far fa-plus"></i>
									</a>
								) : null}
							</li>
						))}
					</ul>
				</nav>
			</div>
		</>
	);
}
