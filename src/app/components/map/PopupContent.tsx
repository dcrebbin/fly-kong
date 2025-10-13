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
  const actionButtons = (
    <div className="flex items-center justify-center gap-2">
      <a
        href={`https://www.google.com/maps/dir//${data.lat},${data.lng}/`}
        target="_blank"
        rel="noreferrer"
      >
        <SvgIcon html={locationIcon} className="h-6 w-6" />
      </a>
    </div>
  );

  return (
    <div
      className="relative top-0 flex h-fit w-[150px] flex-col items-center justify-start rounded-md bg-white p-2"
      tabIndex={-1}
      style={{
        maxHeight: "150px",
        height: "100%",
        width: "150px",
      }}
      data-id={`popup-${data.id}`}
    >
      {actionButtons}
    </div>
  );
}
