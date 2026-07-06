import { initPlaysmart } from "../../_common/js/common.js";

const ypy = new TimelineMax();
ypy.from([".ypy_1", ".ypy_2", ".ypy_3"], { duration: 0.3, y: "-=200", stagger: 0.13 });

const device = new TimelineMax();
device.to(".device", { duration: 0.3, x: 216, y: 109, scale: 0.45 }, "t2");

initPlaysmart({ ypy, device }, true);
