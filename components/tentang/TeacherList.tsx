
import Image from "next/image";
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
  headmasterName?: string;
}

function TeacherAvatar({
  name,
  imageUrl,
  icon: Icon,
  size,
  variant = "primary",
}: {
  name: string;
  imageUrl?: string | null;
  icon: typeof Person | typeof PersonBadge;
  size: "lg" | "md";
  variant?: "primary" | "neutral";
}) {
  const dimension = size === "lg" ? 192 : 160;
  const backgroundClass =
    variant === "primary"
      ? "bg-secondary/10 text-secondary shadow-lg"
      : "bg-gray-200/60 text-gray-500 shadow-md";

  return (
    <div
      className={`relative mx-auto mb-4 flex items-center justify-center overflow-hidden rounded-full ${backgroundClass}`}
      style={{ height: dimension, width: dimension }}
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={`Foto ${name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 160px, 192px"
        />
      ) : (
        <Icon className={size === "lg" ? "h-24 w-24" : "h-20 w-20"} />
      )}
    </div>
  );
}

export default function TeacherList({ teachers, headmasterName }: TeacherListProps) {
  const normalizedTeachers = Array.isArray(teachers) ? teachers : [];
  const headmasterCandidate = normalizedTeachers.find((teacher) => {
    if (teacher.isHeadmaster) {
      return true;
    }

    return teacher.position.toLowerCase().includes("kepala sekolah");
  });

  const fallbackHeadmasterName = headmasterName?.trim().toLowerCase();

  const headmaster =
    headmasterCandidate ??
    (headmasterName
      ? {
          name: headmasterName,
          position: "Kepala Sekolah",
          description: "Informasi kepala sekolah dapat diperbarui melalui Sanity Studio.",
          impactStatement: null,
          imageUrl: null,
          isHeadmaster: true,
        }
      : undefined);

  const otherTeachers = headmasterCandidate
    ? normalizedTeachers.filter((teacher) => teacher !== headmasterCandidate)
    : normalizedTeachers.filter((teacher) =>
        fallbackHeadmasterName ? teacher.name.trim().toLowerCase() !== fallbackHeadmasterName : true,
      );

  if (!headmaster && otherTeachers.length === 0) {
    return (
      <m.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-base text-text-muted"
      >
        Data guru belum tersedia. Silakan tambahkan profil melalui Sanity Studio untuk menampilkannya di halaman ini.
      </m.p>
    );
  }

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
          <TeacherAvatar name={headmaster.name} imageUrl={headmaster.imageUrl} icon={PersonBadge} size="lg" />
          <h3 className="text-2xl font-semibold text-text">{headmaster.name}</h3>
          <p className="text-base text-secondary">{headmaster.position}</p>
          {headmaster.description ? (
            <p className="mt-2 text-base text-text-muted">{headmaster.description}</p>
          ) : null}
          {headmaster.impactStatement ? (
            <p className="mt-3 text-sm font-semibold text-secondary/80">
              {headmaster.impactStatement}
            </p>
          ) : null}
        </m.div>
      )}

      {/* Other Teachers Section */}
      {otherTeachers.length > 0 ? (
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {otherTeachers.map((teacher, index) => (
            <m.div key={index} variants={itemVariants} className="text-center">
              <TeacherAvatar
                name={teacher.name}
                imageUrl={teacher.imageUrl}
                icon={Person}
                size="md"
                variant="neutral"
              />
              <h3 className="text-xl font-semibold text-text">{teacher.name}</h3>
              <p className="text-sm text-secondary">{teacher.position}</p>
              {teacher.description ? (
                <p className="mt-2 text-sm text-text-muted">{teacher.description}</p>
              ) : null}
              {teacher.impactStatement ? (
                <p className="mt-3 text-sm font-semibold text-secondary/80">{teacher.impactStatement}</p>
              ) : null}
            </m.div>
          ))}
        </m.div>
      ) : null}
    </div>
  );
}
