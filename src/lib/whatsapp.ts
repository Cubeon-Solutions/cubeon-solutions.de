// Replace with your number in international format (no + or spaces), e.g. "4915112345678"
export const WHATSAPP_NUMBER = "49XXXXXXXXXX";
export const WHATSAPP_MESSAGE =
  "Hallo, ich interessiere mich für eine Zusammenarbeit mit Cubeon Solutions.";

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
