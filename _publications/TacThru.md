---
title: "Simultaneous Tactile-Visual Perception for Learning Multimodal Robot Manipulation"
collection: publications
category: preprints # books / manuscripts / conferences / preprints
permalink: /publication/TacThru
excerpt: '<img src="/files/TacThru/teaser.svg" alt="Teaser Image" width="80%" style="border-radius: 5px;">'
date: 2025-12-12
venue: 'Under Review'
projecturl: 'https://tacthru.yuyang.li'
paperurl: 'https://arxiv.org/pdf/2512.09851'
codeurl: 'https://github.com/YuyangLee/TacThru'
arxivurl: 'http://arxiv.org/abs/2512.09851'
slidesurl: #'https://academicpages.github.io/files/slides1.pdf'
videourl: 'https://vimeo.com/1145307821'
bibtexurl: # '/files/Ag2x2/Ag2x2.bib'

authors: 'Yuyang Li*, Yinghan Chen*, Zihang Zhao, Puhao Li, Tengyu Liu<sup><i class="fas fa-envelope"></i></sup>, Siyuan Huang<sup><i class="fas fa-envelope"></i></sup>, Yixin Zhu<sup><i class="fas fa-envelope"></i></sup>'
---
<img src="/files/TacThru/teaser.svg" alt="Teaser Image" width="100%" style="border-radius: 5px;">

Robotic manipulation requires both rich multimodal perception and effective learning frameworks to handle complex real-world tasks. See-Through-Skin (STS) sensors, which combine tactile and visual perception, offer promising sensing capabilities, while modern imitation learning provides powerful tools for policy acquisition. However, existing STS designs lack simultaneous multimodal perception and suffer from unreliable tactile tracking. Furthermore, integrating these rich multimodal signals into learning-based manipulation pipelines remains an open challenge. We introduce TacThru, an STS sensor enabling simultaneous visual perception and robust tactile signal extraction, and TacThru-UMI, an imitation learning framework that leverages these multimodal signals for manipulation. Our sensor features a fully transparent elastomer, persistent illumination, novel keyline markers, and efficient tracking, while our learning system integrates these signals through a Transformer-based Diffusion Policy. Experiments on five challenging real-world tasks show that TacThru-UMI achieves an average success rate of 85.5%, significantly outperforming the baselines of alternating tactile-visual (66.3%) and vision-only (55.4%). The system excels in critical scenarios, including contact detection with thin and soft objects and precision manipulation requiring multimodal coordination. This work demonstrates that combining simultaneous multimodal perception with modern learning frameworks enables more precise, adaptable robotic manipulation.