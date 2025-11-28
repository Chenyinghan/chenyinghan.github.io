---
title: "ControlVLA: Few-shot Object-centric Adaptation for Pre-trained Vision-Language-Action Models"
collection: publications
category: conferences # books / manuscripts / conferences / preprints
permalink: /publication/ControlVLA
excerpt: '<img src="/files/ControlVLA/pipeline.png" alt="Teaser Image" width="80%" style="border-radius: 5px;">'
date: 2025-08-08
venue: 'Conference on Robot Learning (CoRL)'
projecturl: 'https://controlvla.github.io/'
paperurl: 'https://controlvla.github.io/pdf/paper.pdf'
codeurl: 'https://github.com/ControlVLA/ControlVLA'
arxivurl: 'https://www.arxiv.org/abs/2506.16211'
slidesurl: #'https://academicpages.github.io/files/slides1.pdf'
videourl: # 
bibtexurl: '/files/ControlVLA/ControlVLA.bib'

authors: 'Puhao Li, Yingying Wu, Ziheng Xi, Wanlin Li, Yuzhe Huang, Zhiyuan Zhang, Yinghan Chen, Jianan Wang, Song-Chun Zhu, Tengyu Li<sup><i class="fas fa-envelope"></i></sup>, Siyuan Huang<sup><i class="fas fa-envelope"></i></sup>'

---
<img src="/files/ControlVLA/pipeline.png" alt="Teaser Image" width="100%" style="border-radius: 5px;">

Learning real-world robotic manipulation is challenging, particularly when limited demonstrations are available. Existing methods for few-shot manipulation often rely on simulation-augmented data or pre-built modules like grasping and pose estimation, which struggle with sim-to-real gaps and lack extensibility. While large-scale imitation pre-training shows promise, adapting these general-purpose policies to specific tasks in data-scarce settings remains unexplored. To achieve this, we propose ControlVLA, a novel framework that bridges pre-trained VLA models with object-centric representations via a ControlNet-style architecture for efficient fine-tuning. Specifically, to introduce object-centric conditions without overwriting prior knowledge, ControlVLA zero-initializes a set of projection layers, allowing them to gradually adapt the pre-trained manipulation policies. In real-world experiments across 6 diverse tasks, including pouring cubes and folding clothes, our method achieves a 76.7% success rate while requiring only 10-20 demonstrations --- a significant improvement over traditional approaches that require more than 100 demonstrations to achieve comparable success. Additional experiments highlight ControlVLA's extensibility to long-horizon tasks and robustness to unseen objects and backgrounds.