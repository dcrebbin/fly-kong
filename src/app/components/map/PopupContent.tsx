/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { type LocationItem } from "~/app/common/locations";

import { locationIcon } from "~/lib/icons/locationIcon";
import { minusIcon } from "~/lib/icons/minusIcon";

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
  onMinimize,
}: {
  data: LocationItem;
  onMinimize?: () => void;
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
      <div className="flex justify-end w-full">
        <button onClick={onMinimize}>
          <SvgIcon html={minusIcon} className="h-6 w-6 drop-shadow-md" />
        </button>
      </div>
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
