---
title: "Ag2x2: Robust Agent-Agnostic Visual Representations for Zero-Shot Bimanual Manipulation"
collection: publications
category: conferences # books / manuscripts / conferences / preprints
permalink: /publication/Ag2x2
excerpt: '<img src="/files/Ag2x2/teaser.png" alt="Teaser Image" width="80%" style="border-radius: 5px;">'
date: 2025-06-16
venue: 'International Conference on Intelligent Robots and Systems (IROS)'
projecturl: 'https://ziyin-xiong.github.io/ag2x2.github.io/'
paperurl: 'https://arxiv.org/pdf/2507.19817'
codeurl: 'https://github.com/ziyin-xiong/Ag2x2'
arxivurl: 'https://arxiv.org/abs/2507.19817'
slidesurl: #'https://academicpages.github.io/files/slides1.pdf'
videourl: # 
bibtexurl: '/files/Ag2x2/Ag2x2.bib'

authors: 'Ziyin Xiong<sup>*</sup>, Yinghan Chen<sup>*</sup>, Puhao Li, Yixin Zhu, Tengyu Liu<sup><i class="fas fa-envelope"></i></sup>, Siyuan Huang<sup><i class="fas fa-envelope"></i></sup>'
---
<img src="/files/Ag2x2/teaser.png" alt="Teaser Image" width="100%" style="border-radius: 5px;">

Bimanual manipulation, fundamental to human daily activities, remains a challenging task due to its inherent complexity of coordinated control. Recent advances have enabled zero-shot learning of single-arm manipulation skills through agent-agnostic visual representations derived from human videos; however, these methods overlook crucial agent-specific information necessary for bimanual coordination, such as end-effector positions. We propose Ag2x2, a computational framework for bimanual manipulation through coordination-aware visual representations that jointly encode object states and hand motion patterns while maintaining agent-agnosticism. Extensive experiments demonstrate that Ag2x2 achieves a 73.5% success rate across 13 diverse bimanual tasks from Bi-DexHands and PerAct2, including challenging scenarios with deformable objects like ropes. This performance outperforms baseline methods and even surpasses the success rate of policies trained with expert-engineered rewards. Furthermore, we show that representations learned through Ag2x2 can be effectively leveraged for imitation learning, establishing a scalable pipeline for skill acquisition without expert supervision. By maintaining robust performance across diverse tasks without human demonstrations or engineered rewards, Ag2x2 represents a step toward scalable learning of complex bimanual robotic skills.