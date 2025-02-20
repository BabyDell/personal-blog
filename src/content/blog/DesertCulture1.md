---
title: "Building Desert Culture: From Concept to Execution"
description: "How I created the Desert Culture website and the thought process behind it."
tags:
  - Web Development
  - Technology Trends
  - Frontend
  - Backend
imageSrc: "/img/blog/desert-culture-website.jpg"
date: "2025-02-19"
---

## Introduction

Hello! It’s been nearly a month since my last update, and I’m eager to share a project I’ve been working on. It’s called Desert Culture. It is an article-based magazine where I spotlight the latest trends across a wide range of categories, including shopping, fashion, news, and events. The concept behind the magazine is for local readers from the Coachella Valley to read articles of their interest.

Building a website with so many elements to me had me wondering where to start. I sought to answer a few key questions to understand what my website needs. Who is my audience? Where are they located? What are their age demographics? What motivates them early, and what struggles do they face?

## Defining the Structure

Once I set a clear understanding of my goals, I turned my attention to the design of the website’s navigation flow. How would the articles be organized and uploaded? What features would drive engagement, and what methods should I use to monetize the platform? This stage was important since it would give me a clearer structure to ensure productivity over the long term. I say clearer because realistically, what I draw up first will not likely be the exact end product.

## Navigation Flow

The first question I sought to answer was the navigation flow. When I talk about navigation flow, I focus on how users will be navigating through my site. For example, a user sees the navigation link in a navbar and clicks it. They want to go back to the homepage—how easy is it for them to understand how to go back? Another question is: What are the navigation links in the navbar?

Ultimately, I decided on four primary categories:

- Things To Do
- Lifestyle
- Events
- News

With my target audience being young adults, Things To Do would address the challenge of finding activities to enjoy, especially in the Coachella Valley, where activities can sometimes be limited. The Lifestyle category would cover topics such as fashion, shopping, and personal finance, while the News section would engage young adults starting to explore political awareness.

## Storing and Uploading Articles

Next, I turned my attention to the method I would use to store and upload articles. I decided to use PostgreSQL to create a database, utilizing Prisma as the ORM to communicate between the frontend and backend. In the schema, each article would be represented by a title, description, content, and additional metadata, such as creation timestamps. The title and description would be stored as strings, while the content itself would be structured as a JSON object. I chose the JSON object because the varied nature of the sections of the article would be rendered differently. For example, one section might be a bullet list, followed by an image, then a paragraph, and so on.

## Incentivizing Users to Read

The third question I answered was: What would incentivize my users to read? How could I ensure that users remain engaged and keep consuming more of the magazine's content?

First, I wanted articles that my target audience would relate to and be interested in. For instance, I believe money is a huge driving force for a lot of people, especially in the Coachella Valley, where it isn’t considered a wealthy area. One of the articles I wrote was about surging egg prices—something people have been upset about and have taken notice of. My article sought to address questions surrounding this issue.

Once users are reading an article, how do I keep them engaged? When you're inside an article, it will suggest more similar articles, encouraging users to keep reading and exploring.

## Learning from Other Websites

After brainstorming these concepts, I explored other websites with a similar article-based format. I focused on the key elements that caught my attention and contributed to a seamless user experience. A key aspect I observed was the site’s flow. How easily could I move from one article to the next in an engaging and effortless manner? I wanted users to experience that irresistible urge to keep reading, causing them to fall into a "rabbit hole" of articles.

I also paid attention to the layout of the page. How well did the design allow me to find exactly what I was looking for without feeling overwhelmed by too many choices or a cluttered UI? The worst thing you can make a user feel is mental exhaustion from making so many decisions.

##