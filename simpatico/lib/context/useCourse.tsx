"use client";

import { createContext, useContext, useState } from "react";

// Definindo o tipo do contexto
interface CourseContextType {
  selectedCourse: string | null;
  setSelectedCourse: (course: string | null) => void;
  selectedDiscipline: string | null;
  setSelectedDiscipline: (discipline: string | null) => void;
}

// Criando o contexto com tipo explícito
const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedDiscipline, setSelectedDiscipline] = useState<string | null>(
    null
  );

  return (
    <CourseContext.Provider
      value={{
        selectedCourse,
        setSelectedCourse,
        selectedDiscipline,
        setSelectedDiscipline,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

// Hook customizado com validação
export const useCourse = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useCourse deve ser usado dentro de um CourseProvider");
  }
  return context;
};
