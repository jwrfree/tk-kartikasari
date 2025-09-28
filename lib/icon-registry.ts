import type { Icon as BootstrapIcon } from "react-bootstrap-icons";
import {
  Whatsapp,
  Telephone,
  Envelope,
  TelephoneOutbound,
  ChatDots,
} from "react-bootstrap-icons";

const registry: Record<string, BootstrapIcon> = {
  Whatsapp,
  Telephone,
  Envelope,
  TelephoneOutbound,
  ChatDots,
};

export function getBootstrapIcon(name?: string | null): BootstrapIcon | null {
  if (!name) {
    return null;
  }

  return registry[name] ?? null;
}
