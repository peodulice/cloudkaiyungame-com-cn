// public/site-helper.js

const SiteHelper = (function () {
  // Configuration data
  const CONFIG = {
    siteUrl: "https://www.cloudkaiyungame.com.cn",
    keyword: "开云",
    seed: "751b4080043e8507"
  };

  // Sample data for cards and badges
  const cardData = [
    { title: "平台简介", content: "欢迎访问官方站点，获取最新动态与资讯。", color: "#4A90D9" },
    { title: "常见问题", content: "使用过程中遇到疑问？请查阅帮助中心。", color: "#50C878" },
    { title: "联系支持", content: "如需人工协助，请通过客服通道反馈。", color: "#E67E22" }
  ];

  const badgeTags = [
    { text: CONFIG.keyword + "资讯", type: "primary" },
    { text: CONFIG.keyword + "指南", type: "secondary" },
    { text: "安全提示", type: "warning" },
    { text: "更新日志", type: "info" }
  ];

  const accessNotes = [
    "本页面为静态演示，不涉及用户数据收集。",
    "建议使用现代浏览器访问，以获得最佳体验。",
    "所有内容仅供展示用途，请勿用于非法目的。"
  ];

  // Helper to create a DOM element with attributes and text
  function createElement(tag, attrs, text) {
    const el = document.createElement(tag);
    if (attrs) {
      for (const [key, value] of Object.entries(attrs)) {
        el.setAttribute(key, value);
      }
    }
    if (text !== undefined) {
      el.textContent = text;
    }
    return el;
  }

  // Render tip cards
  function renderCards(container) {
    const section = createElement("div", { class: "helper-cards" });
    const heading = createElement("h3", {}, "提示卡片");
    section.appendChild(heading);

    const list = createElement("div", { class: "card-list" });
    cardData.forEach(item => {
      const card = createElement("div", { class: "card-item", style: "border-left: 4px solid " + item.color });
      const titleEl = createElement("h4", {}, item.title);
      const contentEl = createElement("p", {}, item.content);
      card.appendChild(titleEl);
      card.appendChild(contentEl);
      list.appendChild(card);
    });
    section.appendChild(list);
    container.appendChild(section);
  }

  // Render keyword badges
  function renderBadges(container) {
    const section = createElement("div", { class: "helper-badges" });
    const heading = createElement("h3", {}, "关键词徽章");
    section.appendChild(heading);

    const badgeContainer = createElement("div", { class: "badge-list" });
    badgeTags.forEach(tag => {
      const badge = createElement("span", { class: "badge badge-" + tag.type }, tag.text);
      badgeContainer.appendChild(badge);
    });
    section.appendChild(badgeContainer);
    container.appendChild(section);
  }

  // Render access instructions
  function renderAccessNotes(container) {
    const section = createElement("div", { class: "helper-notes" });
    const heading = createElement("h3", {}, "访问说明");
    section.appendChild(heading);

    const list = createElement("ul", {});
    accessNotes.forEach(note => {
      const li = createElement("li", {}, note);
      list.appendChild(li);
    });
    // Also show the URL
    const urlItem = createElement("li", {}, "官方网址：" + CONFIG.siteUrl);
    list.appendChild(urlItem);
    section.appendChild(list);
    container.appendChild(section);
  }

  // Public initialization method
  function init(targetSelector) {
    const target = document.querySelector(targetSelector || "body");
    if (!target) return;

    // Create a wrapper div for all helper content
    const wrapper = createElement("div", { class: "site-helper-wrapper", id: "site-helper" });

    renderCards(wrapper);
    renderBadges(wrapper);
    renderAccessNotes(wrapper);

    // Append to target
    target.appendChild(wrapper);
  }

  return {
    init: init
  };
})();

// Auto-init if not in module environment
if (typeof window !== "undefined" && window.document) {
  document.addEventListener("DOMContentLoaded", function () {
    SiteHelper.init("body");
  });
}