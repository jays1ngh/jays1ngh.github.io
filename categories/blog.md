---
layout: default
title: blog
permalink: /blog/categories/blog/
---
<div class="container">
    <h5> Posts by Category : {{ page.title }} </h5>

    <div class="card">
    <!-- jekyll category added below -->
    {% for post in site.categories.blog %}
    <li class="category-posts"><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
    </div>
</div>