
import { m } from "framer-motion";
import { Person, PersonBadge } from "react-bootstrap-icons";
import type { TeacherProfile } from "@/lib/types/site";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

interface TeacherListProps {
  teachers: TeacherProfile[];
}

export default function TeacherList({ teachers }: TeacherListProps) {
  const headmaster = teachers.find((t) => t.position === "Kepala Sekolah");
  const otherTeachers = teachers.filter((t) => t.position !== "Kepala Sekolah");

  return (
    <div className="space-y-12">
      {/* Headmaster Section */}
      {headmaster && (
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-sm text-center"
        >
          <div className="relative mx-auto mb-4 flex h-48 w-48 items-center justify-center overflow-hidden rounded-full bg-secondary/10 text-secondary shadow-lg">
            <PersonBadge className="h-24 w-24" />
          </div>
          <h3 className="text-2xl font-semibold text-text">{headmaster.name}</h3>
          <p className="text-base text-secondary">{headmaster.position}</p>
          <p className="mt-2 text-base text-text-muted">{headmaster.description}</p>
        </m.div>
      )}

      {/* Other Teachers Section */}
      <m.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {otherTeachers.map((teacher, index) => (
          <m.div key={index} variants={itemVariants} className="text-center">
            <div className="relative mx-auto mb-4 flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-gray-200/60 text-gray-500 shadow-md">
              <Person className="h-20 w-20" />
            </div>
            <h3 className="text-xl font-semibold text-text">{teacher.name}</h3>
            <p className="text-sm text-secondary">{teacher.position}</p>
            <p className="mt-2 text-sm text-text-muted">{teacher.description}</p>
          </m.div>
        ))}
      </m.div>
    </div>
  );
}
