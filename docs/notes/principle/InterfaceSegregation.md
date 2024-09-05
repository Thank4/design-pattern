---
lang: zh-CN
title: 接口隔离
icon: mdi:tooltip-text-outline
description: 接口隔离
createTime: 2024/09/03 11:24:35
tags:
  - principle
permalink: /principle/InterfaceSegregation/
---

A、B类各自其实只需要Interface1接口中的方法，但是A和B类确不得不实现接口的所有接口方法

![img.png](../assets/img3.png)

我们遵循接口隔离的方式

![img.png](../assets/img4.png)
