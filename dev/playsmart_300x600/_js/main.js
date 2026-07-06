import { initPlaysmart } from "../../_common/js/common.js";

const ypy = new TimelineMax();
ypy.from([".ypy_1", ".ypy_2", ".ypy_3"], { duration: 0.3, y: "-=200", stagger: 0.13 });

initPlaysmart({ ypy }, true);
