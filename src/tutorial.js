// Firefox-only: Use browser namespace directly
const chrome = typeof browser !== 'undefined' ? browser : self.chrome;

// Tutorial page JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.tutorial-step');
  const progressSteps = document.querySelectorAll('.progress-step');

  // Navigation buttons
  document.querySelectorAll('.nav-btn[data-next]').forEach(btn => {
    btn.addEventListener('click', () => {
      const nextStep = btn.dataset.next;
      goToStep(parseInt(nextStep));
    });
  });

  document.querySelectorAll('.nav-btn[data-prev]').forEach(btn => {
    btn.addEventListener('click', () => {
      const prevStep = btn.dataset.prev;
      goToStep(parseInt(prevStep));
    });
  });

  // Progress bar clicks
  progressSteps.forEach(step => {
    step.addEventListener('click', () => {
      const stepNum = parseInt(step.dataset.step);
      goToStep(stepNum);
    });
  });

  function goToStep(stepNum) {
    // Update content
    steps.forEach(step => step.classList.remove('active'));
    const targetStep = document.getElementById(`step-${stepNum}`);
    if (targetStep) {
      targetStep.classList.add('active');
    }

    // Update progress bar
    progressSteps.forEach(ps => {
      const psNum = parseInt(ps.dataset.step);
      ps.classList.remove('active', 'completed');
      if (psNum === stepNum) {
        ps.classList.add('active');
      } else if (psNum < stepNum) {
        ps.classList.add('completed');
      }
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Open shortcuts page
  const shortcutsBtn = document.getElementById('open-shortcuts');
  if (shortcutsBtn) {
    shortcutsBtn.addEventListener('click', () => {
      chrome.tabs.create({ url: 'about:addons' });
    });
  }

  // Open options page
  const optionsBtn = document.getElementById('open-options');
  if (optionsBtn) {
    optionsBtn.addEventListener('click', () => {
      chrome.runtime.openOptionsPage();
    });
  }

  // Open settings from final screen
  const settingsFinalBtn = document.getElementById('open-settings-final');
  if (settingsFinalBtn) {
    settingsFinalBtn.addEventListener('click', () => {
      chrome.runtime.openOptionsPage();
    });
  }

  // Skip tutorial
  const skipBtn = document.getElementById('skip-tutorial');
  if (skipBtn) {
    skipBtn.addEventListener('click', async () => {
      await chrome.storage.local.set({ tutorialCompleted: true });
      window.close();
    });
  }

  // Finish tutorial
  const finishBtn = document.getElementById('finish-tutorial');
  if (finishBtn) {
    finishBtn.addEventListener('click', async () => {
      await chrome.storage.local.set({ tutorialCompleted: true });
      window.close();
    });
  }

  // Mark tutorial as viewed
  chrome.storage.local.set({ tutorialViewed: true });
});
