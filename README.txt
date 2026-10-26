SV1 PRO DLMS — WEB / PWA PACKAGE

Upload all files in this folder to the ROOT of a GitHub repository, then enable GitHub Pages from branch main / root.
Files: index.html, manifest.json, sw.js, icon.svg.

Features in this build:
- Switchable feature pages: Analyzer, EQ/Live Graph, Compressor & Limiter, Crossover, Phase/Delay, Project/Tools (no long scrolling page)
- Two microphone analysis modes: RTA 1/3-octave-style bands and detailed FFT music spectrum (HTTPS permission required)
- Live microphone spectrum overlay on the EQ graph, alongside the selected EQ curve
- Input device selection where browser/device supports it
- 15-band / 31-band EQ controls with presets and live graph
- Signal generator for tone / pink noise / white noise
- Compressor transfer-curve visualizer and parameter controls
- Limiter ceiling/output preview graph
- TOP/SUB crossover HPF/LPF theoretical response graph
- Phase/delay assistance and session export

Important: Compressor, limiter and crossover panels are visual calculators/previews only. They do not process the microphone/output audio in real time and do not communicate with an external DLMS Hybrid ProX22 DSP. EQ monitor processing is limited to the web app's own audio path. SPL needs calibration; accurate phase/delay/crossover requires appropriate measurement references and speaker data.
