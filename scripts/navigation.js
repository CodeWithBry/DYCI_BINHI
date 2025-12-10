import {
    tabsContainer, tab,
    hamburgerButton, closeSideBarButton
} from "./windowScroll.js";

import { pages } from "./pageComponents.js"

function resetTabs() {
    tab.forEach(e => {
        if (e.classList.contains("highlight")) {
            e.classList.remove("highlight");
        }
    })
}

export function highlightTab(e) {
    resetTabs();
    const el = e?.currentTarget || e; // safer than e.target
    el.classList.add("highlight");

    pages

    // Smoothly scroll the nav container so the tab becomes fully visible
    el.scrollIntoView({
        behavior: "instant",
        left: +100,
        block: "nearest"    // avoids vertical scrolling
    });
}

function handleSideBar() {
    const classList = tabsContainer.classList;

    if (classList.contains("show-side-bar")) {
        classList.replace("show-side-bar", "hide-side-bar");
        closeSideBarButton.removeEventListener("click", handleSideBar)
        hamburgerButton.removeEventListener("click", handleSideBar)

        const timeOut = setTimeout(() => {
            classList.remove("hide-side-bar");
            closeSideBarButton.addEventListener("click", handleSideBar)
            hamburgerButton.addEventListener("click", handleSideBar)

            clearTimeout(timeOut)
        }, 1000);

    } else {
        classList.add("show-side-bar")
    }
}

tab.forEach(e => {
    e.addEventListener("click", handleSideBar)
})

hamburgerButton?.addEventListener("click", handleSideBar)
closeSideBarButton?.addEventListener("click", handleSideBar)