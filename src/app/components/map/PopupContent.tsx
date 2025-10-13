/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { type LocationItem } from "~/app/common/locations";

import { locationIcon } from "~/lib/icons/locationIcon";

export function SvgIcon({
  html,
  className,
}: {
  html: string;
  className?: string;
}) {
  return (
    // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
    <span className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
}

export function PopupContent({
  data,
  onDelete,
  onEdit,
}: {
  data: LocationItem;
  onDelete?: () => void;
  onEdit?: () => void;
}) {
  return (
    <div
      className="relative top-0 flex h-[300px] w-[500px] flex-col items-center justify-start rounded-md bg-white"
      tabIndex={-1}
      style={{
        maxHeight: "500px",
        width: "500px",
      }}
      data-id={`popup-${data.id}`}
    >
      <iframe
        src={data.iframe}
        width="100%"
        height="100%"
        className="p-0 m-0"
        style={{ border: 0 }}
        allowFullScreen
      />
    </div>
  );
}
