import { defineClientConfig } from "vuepress/client";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupSnowFall } from "vuepress-theme-hope/presets/snowFall.js";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";

export default defineClientConfig({
  setup: () => {
    setupSnowFall();
    setupTransparentNavbar({ type: "homepage" });
    setupRunningTimeFooter(
        new Date("2024-10-16T11:13:03"),
        {
          "/en/": "Running time: :day days :hour hours :minute minutes :second seconds",
          "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
        },
        true,
      );
  },
});