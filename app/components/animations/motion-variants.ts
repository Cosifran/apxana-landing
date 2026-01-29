import { Variants } from "motion/react";

// Animación fade-in desde abajo
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
};

// Animación fade-in desde la izquierda
export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -20 
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
};

// Animación fade-in desde la derecha
export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 20 
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
};

// Animación simple de fade
export const fadeIn: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    } 
  }
};

// Contenedor con stagger para elementos hijos
export const staggerContainer: Variants = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.1
    } 
  }
};

// Variante para items dentro de stagger container
export const staggerItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
};

// Animación de escala sutil
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
};

// Viewport config reutilizable
export const viewportConfig = {
  once: true,
  margin: "-100px"
};
