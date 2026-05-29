<script setup lang="ts">
import { ref, onMounted } from "vue";

const visible = ref(false);
onMounted(() => setTimeout(() => (visible.value = true), 100));
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <div class="wrapper" :class="{ visible }">
      <div class="bg-grid" aria-hidden="true">
        <div class="grid-lines"></div>
      </div>

      <div class="glare" aria-hidden="true"></div>

      <main class="content">
        <div class="code-block">
          <span class="four">4</span>
          <div class="zero-wrap">
            <svg
              class="zero-svg"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="60"
                cy="60"
                r="54"
                stroke="#3a6fd8"
                stroke-width="2"
                stroke-dasharray="6 4"
                opacity="0.4"
              />
              <circle
                cx="60"
                cy="60"
                r="42"
                stroke="#4a85f5"
                stroke-width="1.5"
                opacity="0.25"
              />
              <text
                x="50%"
                y="54%"
                dominant-baseline="middle"
                text-anchor="middle"
                font-family="'DM Serif Display', serif"
                font-size="52"
                fill="#c8d8f8"
              >
                0
              </text>
              <circle cx="60" cy="20" r="4" fill="#4a85f5" opacity="0.7">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 60 60"
                  to="360 60 60"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>
          <span class="four">4</span>
        </div>

        <div class="divider">
          <span class="line"></span>
          <span class="tag">PAGE_NOT_FOUND</span>
          <span class="line"></span>
        </div>

        <p class="message">
          Looks like this page drifted off the board.<br />
          The task you're looking for doesn't exist here.
        </p>

        <a href="/" class="home-btn">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Back to Board
        </a>
      </main>

      <footer class="footer">TASKY &nbsp;·&nbsp; 404</footer>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Mono:wght@400;500&display=swap");

.wrapper {
  min-height: 80vh;
  background: #08142e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(12px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}
.wrapper.visible {
  opacity: 1;
  transform: translateY(0);
}

.bg-grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.grid-lines {
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(74, 133, 245, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(74, 133, 245, 0.06) 1px, transparent 1px);
  background-size: 48px 48px;
}

.glare {
  position: absolute;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 500px;
  background: radial-gradient(
    ellipse at center,
    rgba(58, 109, 216, 0.18) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
  padding: 2rem;
}

.code-block {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: fadeUp 0.6s ease 0.2s both;
}
.four {
  font-family: "DM Serif Display", serif;
  font-size: clamp(80px, 14vw, 140px);
  color: #c8d8f8;
  line-height: 1;
  letter-spacing: -2px;
}
.zero-wrap {
  width: clamp(80px, 12vw, 120px);
  height: clamp(80px, 12vw, 120px);
}
.zero-svg {
  width: 100%;
  height: 100%;
}

.divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: fadeUp 0.6s ease 0.35s both;
}
.line {
  display: block;
  width: 60px;
  height: 1px;
  background: rgba(74, 133, 245, 0.35);
}
.tag {
  font-family: "DM Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  color: #4a85f5;
  opacity: 0.8;
}

.message {
  font-family: "DM Mono", monospace;
  font-size: 14px;
  line-height: 1.8;
  color: rgba(200, 216, 248, 0.5);
  max-width: 340px;
  animation: fadeUp 0.6s ease 0.45s both;
}

.home-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: "DM Mono", monospace;
  font-size: 13px;
  color: #c8d8f8;
  border: 1px solid rgba(74, 133, 245, 0.4);
  padding: 10px 24px;
  border-radius: 6px;
  text-decoration: none;
  background: rgba(74, 133, 245, 0.08);
  transition:
    background 0.2s,
    border-color 0.2s,
    transform 0.15s;
  animation: fadeUp 0.6s ease 0.55s both;
}
.home-btn:hover {
  background: rgba(74, 133, 245, 0.18);
  border-color: rgba(74, 133, 245, 0.7);
  transform: translateY(-2px);
}
.home-btn:active {
  transform: translateY(0);
}

.footer {
  position: absolute;
  bottom: 24px;
  font-family: "DM Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.15em;
  color: rgba(74, 133, 245, 0.3);
  animation: fadeUp 0.6s ease 0.65s both;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
