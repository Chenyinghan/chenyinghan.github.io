---
title: "HOT: Robot Tool Design from Scratch via Behavior-Aware Hierarchical Optimization"
collection: publications
category: preprints # books / manuscripts / conferences / preprints
permalink: /publication/HOT
excerpt: '<img src="/files/HOT/teaser-web.webp" srcset="/files/HOT/teaser-480.webp 480w, /files/HOT/teaser-960.webp 960w, /files/HOT/teaser-1440.webp 1440w, /files/HOT/teaser-web.webp 1800w" sizes="(min-width: 1280px) 790px, (min-width: 925px) 565px, (min-width: 768px) calc(80vw - 28.8px), calc(80vw - 25.6px)" alt="HOT jointly designs tool structure, shape, and action across four physical tasks." width="1800" height="507" loading="lazy" decoding="async" style="width: 80%; height: auto; border-radius: 5px;">'
date: 2026-09-28
venue: 'arXiv'
projecturl: 'https://hot.yinghanchen.com/'
paperurl: 'https://arxiv.org/pdf/2609.35479'
codeurl: 'https://github.com/Chenyinghan/HOT'
arxivurl: 'https://arxiv.org/abs/2609.35479'
videourl: 'https://player.vimeo.com/video/1230686259'
bibtexurl: '/files/HOT/HOT.bib'

authors: 'Yinghan Chen*, Xiyao Tian*, Yizan Dai, Yuyang Li<sup><i class="fas fa-envelope"></i></sup>, Yixin Zhu<sup><i class="fas fa-envelope"></i></sup>'
---
<img src="/files/HOT/teaser-web.webp" srcset="/files/HOT/teaser-480.webp 480w, /files/HOT/teaser-960.webp 960w, /files/HOT/teaser-1440.webp 1440w, /files/HOT/teaser-web.webp 1800w" sizes="(min-width: 1280px) 770px, (min-width: 925px) 550px, (min-width: 768px) calc(100vw - 36px), calc(100vw - 32px)" alt="HOT jointly designs tool structure, shape, and action across four physical tasks." width="1800" height="507" loading="eager" decoding="async" style="width: 100%; height: auto; border-radius: 5px;">

The ability to design a tool for a task marks a level of intelligence beyond merely understanding, selecting, or using one. Existing methods for robotic tool design typically optimize a tool's continuous shape and action within a structure that is prescribed or generated beforehand, so the structure itself stays outside the physical optimization loop. We study task-driven tool design from scratch, where tool structure, shape, and action are all derived from the desired physical outcome. Here we show that the three elements can be designed jointly by HOT, a hierarchical optimization whose upper level searches over discrete tool structures with BASS, while lower-level physical optimization evaluates their task behavior and returns milestone progress as behavioral evidence for the search, ultimately providing jointly optimized shape and action. On four tool-use tasks with distinct physical functions, HOT discovers functional structures after evaluating only a small fraction of search spaces containing up to 56 million structures, and the subsequent refinement of their geometry lowers the task loss on all tasks while preserving success, through deformations that are functionally interpretable. Once 3D printed, the tools accomplish all tasks on a real robot with the actions found in simulation. Designing tools from required physical effects, rather than a catalog of known tools, is a step toward the open-ended tool making seen in humans and animals.
