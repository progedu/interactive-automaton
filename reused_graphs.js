"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARRAY_AND_8 = exports.NI_N_CO_N = exports.CO_NI_STAR_CO_STAR = exports.NINICOCO_FORMAL = exports.ENDS_WITH_NICO = exports.NICONICO_SANDWICHED_BY_NI = exports.COMPLICATED_TRIANGLE = void 0;
exports.COMPLICATED_TRIANGLE = {
    vertices: [
        { id: "1", center: { x: 0, y: 0 } },
        { id: "2", center: { x: 1, y: 0 }, is_final: true },
        { id: "3", center: { x: 0.5, y: Math.sqrt(3) / 2 }, is_final: true },
    ], initial_vertex: "1", straight_edges: [
        { label: "ニ", from: "1", to: "2", config: { bring_edge_label_closer: true, arrow_is_offset: true } },
        { label: "ニ", from: "2", to: "1", config: { bring_edge_label_closer: true, arrow_is_offset: true } },
        { label: "コ", from: "1", to: "3", config: { bring_edge_label_closer: true, arrow_is_offset: true } },
        { label: "コ", from: "3", to: "1", config: { bring_edge_label_closer: true, arrow_is_offset: true } },
        { label: "ニ", from: "3", to: "2", config: { bring_edge_label_closer: true } },
    ], self_loops: [
        { label: "コ", from_eq_to: "2", config: { self_loop_rotation: -30 } }
    ]
};
exports.NICONICO_SANDWICHED_BY_NI = {
    vertices: [
        { id: "q1", center: { x: 0, y: 0 } },
        { id: "q2", center: { x: 1, y: 0 } },
        { id: "q4", center: { x: 2, y: 0 }, is_final: true },
        { id: "q3", center: { x: 1, y: 1 } }
    ],
    straight_edges: [
        { label: "ε", from: "q1", to: "q2" },
        { label: "ニ", from: "q2", to: "q3", config: { arrow_is_offset: true } },
        { label: "コ", from: "q3", to: "q2", config: { arrow_is_offset: true } },
        { label: "ε", from: "q2", to: "q4" },
    ], self_loops: [
        { label: "ニ", from_eq_to: "q1", config: { self_loop_rotation: -90 } },
        { label: "ニ", from_eq_to: "q4", config: { self_loop_rotation: -90 } }
    ],
    initial_vertex: "q1"
};
exports.ENDS_WITH_NICO = {
    vertices: [
        { id: "q1", center: { x: 0, y: Math.sqrt(3) / 2 } },
        { id: "q2", center: { x: 0.5, y: 0 } },
        { id: "q3", center: { x: 1, y: Math.sqrt(3) / 2 }, is_final: true },
    ], initial_vertex: "q1", straight_edges: [
        { label: "ニ", from: "q1", to: "q2" },
        { label: "コ", from: "q3", to: "q1" },
        { label: "コ", from: "q2", to: "q3", config: { arrow_is_offset: true } },
        { label: "ニ", from: "q3", to: "q2", config: { arrow_is_offset: true } },
    ], self_loops: [
        { label: "コ", from_eq_to: "q1", config: { self_loop_rotation: 90 } },
        { label: "ニ", from_eq_to: "q2", config: { self_loop_rotation: -90 } },
    ]
};
exports.NINICOCO_FORMAL = {
    vertices: [
        { id: "q1", center: { x: 0, y: 0 } },
        { id: "q2", center: { x: 1, y: 0 } },
        { id: "q3", center: { x: 2, y: 0 }, is_final: true },
    ], initial_vertex: "q1", self_loops: [
        { label: "ニ, 床→皿床", from_eq_to: "q1", config: { self_loop_rotation: -90 } },
        { label: "ニ, 皿→皿皿", from_eq_to: "q1", config: { self_loop_rotation: 90 } },
        { label: "コ, 皿→ε", from_eq_to: "q2", config: { self_loop_rotation: -90 } },
    ], straight_edges: [
        { label: "コ, 皿→ε", from: "q1", to: "q2" },
        { label: "ε, 床→床", from: "q2", to: "q3" },
    ]
};
exports.CO_NI_STAR_CO_STAR = {
    vertices: [
        { id: "q1", center: { x: 0, y: 0 } },
        { id: "q2", center: { x: 1, y: 0 } },
        { id: "q3", center: { x: 2, y: 0 }, is_final: true },
    ], initial_vertex: "q1", self_loops: [
        { label: "ニ", from_eq_to: "q2", config: { self_loop_rotation: 90 } },
        { label: "コ", from_eq_to: "q3", config: { self_loop_rotation: 90 } },
    ], straight_edges: [
        { label: "コ", from: "q1", to: "q2" },
        { label: "ε", from: "q2", to: "q3" },
    ]
};
exports.NI_N_CO_N = {
    vertices: [
        { id: "q1", center: { x: 0, y: 0 } },
        { id: "q2", center: { x: 1, y: 0 } },
        { id: "q3", center: { x: 2, y: 0 }, is_final: true },
    ], initial_vertex: "q1", self_loops: [
        { label: "ニ, 皿を追加", from_eq_to: "q1", config: { self_loop_rotation: -90 } },
        { label: "コ, 皿を除去", from_eq_to: "q2", config: { self_loop_rotation: -90 } },
    ], straight_edges: [
        { label: "コ, 皿を除去", from: "q1", to: "q2" },
        { label: "ε, 床を観測", from: "q2", to: "q3" },
    ]
};
exports.ARRAY_AND_8 = {
    vertices: [
        { id: "q1", center: { x: 0, y: 0 } },
        { id: "q2", center: { x: 1, y: 0 } },
        { id: "q3", center: { x: 2, y: 0 }, is_final: true },
    ], initial_vertex: "q1", self_loops: [
        { label: "[, 皿を追加", from_eq_to: "q1", config: { self_loop_rotation: -90 } },
        { label: "], 皿を除去", from_eq_to: "q2", config: { self_loop_rotation: -90 } },
    ], straight_edges: [
        { label: "8, そのまま", from: "q1", to: "q2", config: { label_ad_hoc_offset: { local_x: 0, local_y: -10 } } },
        { label: "], 皿を除去", from: "q1", to: "q2" },
        { label: "ε, 床を観測", from: "q2", to: "q3" },
    ]
};
