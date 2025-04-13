import { ref, onMounted, onUnmounted } from 'vue';

export function useDevice () {
  const device = ref(getDeviceByWidth());

  function getDeviceByWidth () {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  }

  function updateDevice () {
    device.value = getDeviceByWidth();
  }

  onMounted(() => {
    updateDevice();
    window.addEventListener('resize', updateDevice);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateDevice);
  });

  return { device };
}
