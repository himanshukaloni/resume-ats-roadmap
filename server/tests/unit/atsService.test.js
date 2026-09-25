import {analyzeResume} from "../../src/services/atsService.js";
test("ATS analysis returns bounded score and roadmap",()=>{const r=analyzeResume("Java Spring Boot MySQL Git experience education skills","Java Backend Developer");expect(r.atsScore).toBeGreaterThanOrEqual(0);expect(r.atsScore).toBeLessThanOrEqual(100);expect(Array.isArray(r.roadmap)).toBe(true)});
