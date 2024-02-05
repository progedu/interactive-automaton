import * as fs from 'fs';
import { AutomatonGraph, all_steps, genGraphSVG } from 'state-diagram-renderer';

const css = fs.readFileSync("assets/embed.css", { encoding: "utf-8" });
const css_with_stack = fs.readFileSync("assets/embed-with-stack.css", { encoding: "utf-8" });

const png_content = fs.readFileSync("assets/asterisquirrel45.png", { encoding: 'base64' });

async function writeGraph(o: { filepath: string, width: number, height: number }, g: AutomatonGraph) {
  await fs.promises.writeFile(o.filepath, genGraphSVG(g.stack ? css_with_stack : css, o, g, png_content));
}

const final_image_list: string[] = [];

function writeGraph2(
  p: { 回: number, セクション: number, ファイル名: string },
  o: { width: number, height: number },
  g: AutomatonGraph) {
  const folder_name = `ZICSAM${String(p.回).padStart(2, "0")}_G00${p.セクション}`;
  /*if (!fs.existsSync(`${folder_name}#image`)) {
    fs.mkdirSync(`${folder_name}#image`);
  }
  writeGraph({
    ...o,
    filepath: `${folder_name}#image/${p.ファイル名}`
  }, g);*/

 
    final_image_list.push(`./${folder_name}_image_${p.ファイル名}`);
    writeGraph({
      ...o,
      filepath: `./${folder_name}_image_${p.ファイル名}`
    }, g);
  
}

/********************
 * ZICSAM02_G005.md *
 ********************/

const FOO: AutomatonGraph = {
  vertices: [
    { id: "q1", center: { x: 0, y: 0 } },
    { id: "q2", center: { x: 1, y: 0 } },
    { id: "q3", center: { x: 2, y: 0 }, is_final: true },
    { id: "q4", center: { x: 1, y: 1 } },
  ], initial_vertex: "q1", self_loops: [
    { label: "コ", from_eq_to: "q1", config: { self_loop_rotation: 90 } },
    { label: "ニ,コ", from_eq_to: "q4", config: { self_loop_rotation: 90 } },
    { label: "ニ,コ", from_eq_to: "q3", config: { self_loop_rotation: 90 } },
  ], straight_edges: [
    { label: "ニ", from: "q1", to: "q2" },
    { label: "コ", from: "q2", to: "q3" },
    { label: "ニ", from: "q2", to: "q4" },
  ]
};

writeGraph2(
  { 回: 2, セクション: 5, ファイル名: "DFA_NICO$$-1.svg" }, {
  width: 418.5,
  height: 209.43
}, FOO);

playback_automaton_and_write_sequential(
  {
    回: 2, セクション: 5, file_prefix: "DFA_NICO$$",
  }, {
  width: 418.5,
  height: 209.43
}, FOO, "ニコ");

const BAR: AutomatonGraph = {
  vertices: [
    { id: "q1", center: { x: 0, y: Math.sqrt(3) / 2 } },
    { id: "q2", center: { x: 0.5, y: 0 } },
    { id: "q3", center: { x: 1.5, y: 0 }, is_final: true },
    { id: "q4", center: { x: 0.5, y: Math.sqrt(3) } },
    { id: "q5", center: { x: 1.5, y: Math.sqrt(3) }, is_final: true },
  ], initial_vertex: "q1", self_loops: [
    { label: "ニ,コ", from_eq_to: "q3", config: { self_loop_rotation: 90 } },
  ], straight_edges: [
    { label: "ニ", from: "q1", to: "q2" },
    { label: "ニ", from: "q1", to: "q4" },
    { label: "ニ", from: "q2", to: "q3" },
    { label: "コ", from: "q4", to: "q5" },
  ]
};

writeGraph2(
  { 回: 2, セクション: 5, ファイル名: "nfa_no_piece.svg" }, {
  width: 418.5,
  height: 300
}, BAR);

function playback_automaton_and_write_sequential(
  p: { 回: number, セクション: number, file_prefix: string },
  o: { width: number, height: number },
  g: AutomatonGraph, input: string) {

  const piece_locations = all_steps(g, input);
  for (let i = 0; i <= input.length; i++) {
    writeGraph2(
      { 回: p.回, セクション: p.セクション, ファイル名: `${p.file_prefix}${i}.svg` }
      , o
      , {
        ...g
        , pieces: piece_locations[i]
        , string_tape: {
          read: input.slice(0, i),
          unread: input.slice(i)
        }
      }
    );
  }
}

playback_automaton_and_write_sequential(
  { 回: 2, セクション: 5, file_prefix: `KO$$step0`, },
  { width: 418.5, height: 300 },
  BAR, "コ"
);

playback_automaton_and_write_sequential(
  { 回: 2, セクション: 5, file_prefix: `NINI$$step0`, },
  { width: 418.5, height: 300 },
  BAR, "ニニ"
);

playback_automaton_and_write_sequential(
  { 回: 2, セクション: 5, file_prefix: `NICOCO$$step0`, },
  { width: 418.5, height: 300 },
  BAR, "ニココ"
);


fs.promises.writeFile("all_state_diagrams.html", `<!DOCTYPE html><style>img { border: 1px solid pink; } </style><body>${final_image_list.map(path => `<p>${path}</p><img src="${path.replace('#', '%23')}" /><hr>`).join("\n")}</body>`);
