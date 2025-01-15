export type ExceptionTitleLitrals = "feed_not_found" | "feed_duplicated";

export interface ExceptionInfoBase {
  title: ExceptionTitleLitrals;
  info?: object;
}

interface FeedNotFoundExceptionInfo extends ExceptionInfoBase {
  title: "feed_not_found";
  info: {
    id: number;
  };
}

interface FeedDuplicatedExceptionInfo extends ExceptionInfoBase {
  title: "feed_duplicated";
  info: {
    dupKey: string;
    dupValue: string;
  };
}

export type ExceptionInfo =
  | FeedNotFoundExceptionInfo
  | FeedDuplicatedExceptionInfo;
