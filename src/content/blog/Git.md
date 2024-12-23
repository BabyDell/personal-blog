---
title: "An Overview on Git"
description: "Learn with me how git works"
tags:
  - Web Development
  - Technology Trends
  - Frontend
  - Backend
imageSrc: "/img/blog/git.jpg"
date: "2024-12-17"
---

## What is Git?

Git is a version control system developed by the creator of Linux, Linus Torvalds, along with the Linux community. It fixed many of the problems that were prevalent in other control systems, such as centralized version control systems that relied on a single server containing all versioned files. The goal of the project was to maximize speed, be fully distributed, handle nonlinear development with thousands of parallel branches, manage large projects efficiently, and maintain a simple design.

## Why is Version Control So Important?

Version control is a system that records changes to a file or set of files over time, allowing you to recall specific versions at a later date. Being able to:

- Revert select files back to a previous state,
- Revert the entire project to a previous state,
- Compare changes over a period of time,
- See who modified a file that caused a bug and when, 

...is what makes version control so important. If a mishap occurs causing you to lose files, you can always recover them.

## How Does Git Work?

Git has an important distinction where, when you checkout or clone a repository, it doesn't just mirror the latest snapshot; it mirrors the full history of the repository. Git is a series of snapshots where a commit represents a new snapshot in the system, and you can revert to any snapshot from the past.

Git has three primary states for files: Modified - A file that you’ve made changes to but haven’t committed to your local repository yet. Staged - The file is marked in its current version to be included in the next commit. Committed - The file is ready to be stored in your local repository.

Git also ensures data integrity by checksumming all information before it is stored. This means that you cannot lose information in transit or get file corruption without Git detecting it.

## Distributed Development

Since Git is a  distributed version control system, each developer has their own local copy of the entire repository. Developers can work offline, modifying, staging, and committing changes to their local repository. Once back online, they can push their changes to the remote repository to be shared with the team.
