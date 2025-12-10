import { highlightTab } from "./navigation.js";

export const body = document.body
export const navigation = document.querySelector(".nav")
export const tabsContainer = body.querySelector(".tabs-container");
export const tabs = navigation.querySelector(".tabs");
export const tab = tabs.querySelectorAll(".tab");
export const sections = body.querySelectorAll(".section")
export const hamburgerButton = navigation.querySelector("#hamburger-button")
export const closeSideBarButton = navigation.querySelector("#close-side-bar")

function handleScroll() {
    const scrolled = window.scrollY;
    if (scrolled+100 > navigation.offsetHeight) {
        navigation.classList.add("sticky")
    } else {
        navigation.classList.remove("sticky")
    }
}

function indicateSection() {
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        // Set active tab indicator
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            tab.forEach((tab, i) => {
                if(i == index) highlightTab(tab, false)
            })
        }
    });
}

window.onscroll = (e) => { indicateSection(e), handleScroll }