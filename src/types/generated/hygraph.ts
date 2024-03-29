export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  imageLogo?: InputMaybe<ImageEntryCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  imageLogo?: InputMaybe<ImageEntryUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export type CvPage = Node & {
  __typename?: 'CvPage';
  contactList?: Maybe<List>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<CvPage>;
  educationList?: Maybe<List>;
  experienceList?: Maybe<TopicList>;
  /** List of CvPage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  pageTitleBlock?: Maybe<TitleBlock>;
  privateImageBlock?: Maybe<ImageBlock>;
  profileImageBlock?: Maybe<ImageBlock>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  seoAndOpenGraph?: Maybe<SeoAndOpenGraph>;
  skillsList?: Maybe<List>;
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  websiteList?: Maybe<List>;
};


export type CvPageContactListArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CvPageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CvPageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type CvPageEducationListArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CvPageExperienceListArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CvPageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type CvPagePageTitleBlockArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CvPagePrivateImageBlockArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CvPageProfileImageBlockArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CvPagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CvPageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CvPageSeoAndOpenGraphArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CvPageSkillsListArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CvPageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CvPageWebsiteListArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CvPageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CvPageWhereUniqueInput;
};

/** A connection to a list of items. */
export type CvPageConnection = {
  __typename?: 'CvPageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CvPageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CvPageCreateInput = {
  contactList?: InputMaybe<ListCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  educationList?: InputMaybe<ListCreateOneInlineInput>;
  experienceList?: InputMaybe<TopicListCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<CvPageCreateLocalizationsInput>;
  pageTitleBlock?: InputMaybe<TitleBlockCreateOneInlineInput>;
  privateImageBlock?: InputMaybe<ImageBlockCreateOneInlineInput>;
  profileImageBlock?: InputMaybe<ImageBlockCreateOneInlineInput>;
  seoAndOpenGraph?: InputMaybe<SeoAndOpenGraphCreateOneInlineInput>;
  skillsList?: InputMaybe<ListCreateOneInlineInput>;
  slug: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  websiteList?: InputMaybe<ListCreateOneInlineInput>;
};

export type CvPageCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CvPageCreateLocalizationInput = {
  /** Localization input */
  data: CvPageCreateLocalizationDataInput;
  locale: Locale;
};

export type CvPageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<CvPageCreateLocalizationInput>>;
};

export type CvPageCreateManyInlineInput = {
  /** Connect multiple existing CvPage documents */
  connect?: InputMaybe<Array<CvPageWhereUniqueInput>>;
  /** Create and connect multiple existing CvPage documents */
  create?: InputMaybe<Array<CvPageCreateInput>>;
};

export type CvPageCreateOneInlineInput = {
  /** Connect one existing CvPage document */
  connect?: InputMaybe<CvPageWhereUniqueInput>;
  /** Create and connect one CvPage document */
  create?: InputMaybe<CvPageCreateInput>;
};

/** An edge in a connection. */
export type CvPageEdge = {
  __typename?: 'CvPageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CvPage;
};

/** Identifies documents */
export type CvPageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CvPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CvPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CvPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  contactList?: InputMaybe<ListWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<CvPageWhereStageInput>;
  documentInStages_none?: InputMaybe<CvPageWhereStageInput>;
  documentInStages_some?: InputMaybe<CvPageWhereStageInput>;
  educationList?: InputMaybe<ListWhereInput>;
  experienceList?: InputMaybe<TopicListWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  pageTitleBlock?: InputMaybe<TitleBlockWhereInput>;
  privateImageBlock?: InputMaybe<ImageBlockWhereInput>;
  profileImageBlock?: InputMaybe<ImageBlockWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seoAndOpenGraph?: InputMaybe<SeoAndOpenGraphWhereInput>;
  skillsList?: InputMaybe<ListWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  websiteList?: InputMaybe<ListWhereInput>;
};

export enum CvPageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CvPageUpdateInput = {
  contactList?: InputMaybe<ListUpdateOneInlineInput>;
  educationList?: InputMaybe<ListUpdateOneInlineInput>;
  experienceList?: InputMaybe<TopicListUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<CvPageUpdateLocalizationsInput>;
  pageTitleBlock?: InputMaybe<TitleBlockUpdateOneInlineInput>;
  privateImageBlock?: InputMaybe<ImageBlockUpdateOneInlineInput>;
  profileImageBlock?: InputMaybe<ImageBlockUpdateOneInlineInput>;
  seoAndOpenGraph?: InputMaybe<SeoAndOpenGraphUpdateOneInlineInput>;
  skillsList?: InputMaybe<ListUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  websiteList?: InputMaybe<ListUpdateOneInlineInput>;
};

export type CvPageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<CvPageCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
};

export type CvPageUpdateManyInlineInput = {
  /** Connect multiple existing CvPage documents */
  connect?: InputMaybe<Array<CvPageConnectInput>>;
  /** Create and connect multiple CvPage documents */
  create?: InputMaybe<Array<CvPageCreateInput>>;
  /** Delete multiple CvPage documents */
  delete?: InputMaybe<Array<CvPageWhereUniqueInput>>;
  /** Disconnect multiple CvPage documents */
  disconnect?: InputMaybe<Array<CvPageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CvPage documents */
  set?: InputMaybe<Array<CvPageWhereUniqueInput>>;
  /** Update multiple CvPage documents */
  update?: InputMaybe<Array<CvPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CvPage documents */
  upsert?: InputMaybe<Array<CvPageUpsertWithNestedWhereUniqueInput>>;
};

export type CvPageUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>;
};

export type CvPageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CvPageUpdateManyInput;
  /** Document search */
  where: CvPageWhereInput;
};

export type CvPageUpdateOneInlineInput = {
  /** Connect existing CvPage document */
  connect?: InputMaybe<CvPageWhereUniqueInput>;
  /** Create and connect one CvPage document */
  create?: InputMaybe<CvPageCreateInput>;
  /** Delete currently connected CvPage document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected CvPage document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single CvPage document */
  update?: InputMaybe<CvPageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CvPage document */
  upsert?: InputMaybe<CvPageUpsertWithNestedWhereUniqueInput>;
};

export type CvPageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CvPageUpdateInput;
  /** Unique document search */
  where: CvPageWhereUniqueInput;
};

export type CvPageUpsertInput = {
  /** Create document if it didn't exist */
  create: CvPageCreateInput;
  /** Update document if it exists */
  update: CvPageUpdateInput;
};

export type CvPageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CvPageUpsertInput;
  /** Unique document search */
  where: CvPageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CvPageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type CvPageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CvPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CvPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CvPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  contactList?: InputMaybe<ListWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<CvPageWhereStageInput>;
  documentInStages_none?: InputMaybe<CvPageWhereStageInput>;
  documentInStages_some?: InputMaybe<CvPageWhereStageInput>;
  educationList?: InputMaybe<ListWhereInput>;
  experienceList?: InputMaybe<TopicListWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  pageTitleBlock?: InputMaybe<TitleBlockWhereInput>;
  privateImageBlock?: InputMaybe<ImageBlockWhereInput>;
  profileImageBlock?: InputMaybe<ImageBlockWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seoAndOpenGraph?: InputMaybe<SeoAndOpenGraphWhereInput>;
  skillsList?: InputMaybe<ListWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  websiteList?: InputMaybe<ListWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CvPageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CvPageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CvPageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CvPageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CvPageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References CvPage record uniquely */
export type CvPageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Href = {
  __typename?: 'Href';
  href: Scalars['String'];
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Href>;
  /** System stage field */
  stage: Stage;
  target?: Maybe<HrefTarget>;
  title?: Maybe<Scalars['String']>;
};


export type HrefLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};

export type HrefConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HrefWhereUniqueInput;
};

/** A connection to a list of items. */
export type HrefConnection = {
  __typename?: 'HrefConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HrefEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HrefCreateInput = {
  /** href input for default locale (en) */
  href: Scalars['String'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<HrefCreateLocalizationsInput>;
  target?: InputMaybe<HrefTarget>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type HrefCreateLocalizationDataInput = {
  href: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type HrefCreateLocalizationInput = {
  /** Localization input */
  data: HrefCreateLocalizationDataInput;
  locale: Locale;
};

export type HrefCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<HrefCreateLocalizationInput>>;
};

export type HrefCreateManyInlineInput = {
  /** Create and connect multiple existing Href documents */
  create?: InputMaybe<Array<HrefCreateInput>>;
};

export type HrefCreateOneInlineInput = {
  /** Create and connect one Href document */
  create?: InputMaybe<HrefCreateInput>;
};

export type HrefCreateWithPositionInput = {
  /** Document to create */
  data: HrefCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type HrefEdge = {
  __typename?: 'HrefEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Href;
};

/** Identifies documents */
export type HrefManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HrefWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HrefWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HrefWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  target?: InputMaybe<HrefTarget>;
  /** All values that are contained in given list. */
  target_in?: InputMaybe<Array<InputMaybe<HrefTarget>>>;
  /** All values that are not equal to given value. */
  target_not?: InputMaybe<HrefTarget>;
  /** All values that are not contained in given list. */
  target_not_in?: InputMaybe<Array<InputMaybe<HrefTarget>>>;
};

export enum HrefOrderByInput {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TargetAsc = 'target_ASC',
  TargetDesc = 'target_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type HrefParent = ListEntry;

export type HrefParentConnectInput = {
  ListEntry?: InputMaybe<ListEntryConnectInput>;
};

export type HrefParentCreateInput = {
  ListEntry?: InputMaybe<ListEntryCreateInput>;
};

export type HrefParentCreateManyInlineInput = {
  /** Create and connect multiple existing HrefParent documents */
  create?: InputMaybe<Array<HrefParentCreateInput>>;
};

export type HrefParentCreateOneInlineInput = {
  /** Create and connect one HrefParent document */
  create?: InputMaybe<HrefParentCreateInput>;
};

export type HrefParentCreateWithPositionInput = {
  ListEntry?: InputMaybe<ListEntryCreateWithPositionInput>;
};

export type HrefParentUpdateInput = {
  ListEntry?: InputMaybe<ListEntryUpdateInput>;
};

export type HrefParentUpdateManyInlineInput = {
  /** Create and connect multiple HrefParent component instances */
  create?: InputMaybe<Array<HrefParentCreateWithPositionInput>>;
  /** Delete multiple HrefParent documents */
  delete?: InputMaybe<Array<HrefParentWhereUniqueInput>>;
  /** Update multiple HrefParent component instances */
  update?: InputMaybe<Array<HrefParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple HrefParent component instances */
  upsert?: InputMaybe<Array<HrefParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type HrefParentUpdateManyWithNestedWhereInput = {
  ListEntry?: InputMaybe<ListEntryUpdateManyWithNestedWhereInput>;
};

export type HrefParentUpdateOneInlineInput = {
  /** Create and connect one HrefParent document */
  create?: InputMaybe<HrefParentCreateInput>;
  /** Delete currently connected HrefParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single HrefParent document */
  update?: InputMaybe<HrefParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HrefParent document */
  upsert?: InputMaybe<HrefParentUpsertWithNestedWhereUniqueInput>;
};

export type HrefParentUpdateWithNestedWhereUniqueAndPositionInput = {
  ListEntry?: InputMaybe<ListEntryUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type HrefParentUpdateWithNestedWhereUniqueInput = {
  ListEntry?: InputMaybe<ListEntryUpdateWithNestedWhereUniqueInput>;
};

export type HrefParentUpsertWithNestedWhereUniqueAndPositionInput = {
  ListEntry?: InputMaybe<ListEntryUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type HrefParentUpsertWithNestedWhereUniqueInput = {
  ListEntry?: InputMaybe<ListEntryUpsertWithNestedWhereUniqueInput>;
};

export type HrefParentWhereInput = {
  ListEntry?: InputMaybe<ListEntryWhereInput>;
};

export type HrefParentWhereUniqueInput = {
  ListEntry?: InputMaybe<ListEntryWhereUniqueInput>;
};

export enum HrefTarget {
  Blank = 'blank',
  Parent = 'parent',
  Self = 'self',
  Top = 'top'
}

export type HrefUpdateInput = {
  /** href input for default locale (en) */
  href?: InputMaybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: InputMaybe<HrefUpdateLocalizationsInput>;
  target?: InputMaybe<HrefTarget>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type HrefUpdateLocalizationDataInput = {
  href?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type HrefUpdateLocalizationInput = {
  data: HrefUpdateLocalizationDataInput;
  locale: Locale;
};

export type HrefUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<HrefCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<HrefUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<HrefUpsertLocalizationInput>>;
};

export type HrefUpdateManyInlineInput = {
  /** Create and connect multiple Href component instances */
  create?: InputMaybe<Array<HrefCreateWithPositionInput>>;
  /** Delete multiple Href documents */
  delete?: InputMaybe<Array<HrefWhereUniqueInput>>;
  /** Update multiple Href component instances */
  update?: InputMaybe<Array<HrefUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Href component instances */
  upsert?: InputMaybe<Array<HrefUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type HrefUpdateManyInput = {
  /** href input for default locale (en) */
  href?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<HrefUpdateManyLocalizationsInput>;
  target?: InputMaybe<HrefTarget>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type HrefUpdateManyLocalizationDataInput = {
  href?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type HrefUpdateManyLocalizationInput = {
  data: HrefUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type HrefUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<HrefUpdateManyLocalizationInput>>;
};

export type HrefUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HrefUpdateManyInput;
  /** Document search */
  where: HrefWhereInput;
};

export type HrefUpdateOneInlineInput = {
  /** Create and connect one Href document */
  create?: InputMaybe<HrefCreateInput>;
  /** Delete currently connected Href document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Href document */
  update?: InputMaybe<HrefUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Href document */
  upsert?: InputMaybe<HrefUpsertWithNestedWhereUniqueInput>;
};

export type HrefUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<HrefUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HrefWhereUniqueInput;
};

export type HrefUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HrefUpdateInput;
  /** Unique document search */
  where: HrefWhereUniqueInput;
};

export type HrefUpsertInput = {
  /** Create document if it didn't exist */
  create: HrefCreateInput;
  /** Update document if it exists */
  update: HrefUpdateInput;
};

export type HrefUpsertLocalizationInput = {
  create: HrefCreateLocalizationDataInput;
  locale: Locale;
  update: HrefUpdateLocalizationDataInput;
};

export type HrefUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<HrefUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HrefWhereUniqueInput;
};

export type HrefUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HrefUpsertInput;
  /** Unique document search */
  where: HrefWhereUniqueInput;
};

/** Identifies documents */
export type HrefWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HrefWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HrefWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HrefWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  href_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  href_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  href_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  href_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  href_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  href_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  href_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  target?: InputMaybe<HrefTarget>;
  /** All values that are contained in given list. */
  target_in?: InputMaybe<Array<InputMaybe<HrefTarget>>>;
  /** All values that are not equal to given value. */
  target_not?: InputMaybe<HrefTarget>;
  /** All values that are not contained in given list. */
  target_not_in?: InputMaybe<Array<InputMaybe<HrefTarget>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

/** References Href record uniquely */
export type HrefWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ImageBlock = {
  __typename?: 'ImageBlock';
  /** The unique identifier */
  id: Scalars['ID'];
  imageEntry: Array<ImageEntry>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<ImageBlock>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
};


export type ImageBlockImageEntryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ImageEntryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageEntryWhereInput>;
};


export type ImageBlockLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};

export type ImageBlockConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ImageBlockWhereUniqueInput;
};

/** A connection to a list of items. */
export type ImageBlockConnection = {
  __typename?: 'ImageBlockConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ImageBlockEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ImageBlockCreateInput = {
  imageEntry?: InputMaybe<ImageEntryCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ImageBlockCreateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type ImageBlockCreateLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']>;
};

export type ImageBlockCreateLocalizationInput = {
  /** Localization input */
  data: ImageBlockCreateLocalizationDataInput;
  locale: Locale;
};

export type ImageBlockCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ImageBlockCreateLocalizationInput>>;
};

export type ImageBlockCreateManyInlineInput = {
  /** Create and connect multiple existing ImageBlock documents */
  create?: InputMaybe<Array<ImageBlockCreateInput>>;
};

export type ImageBlockCreateOneInlineInput = {
  /** Create and connect one ImageBlock document */
  create?: InputMaybe<ImageBlockCreateInput>;
};

export type ImageBlockCreateWithPositionInput = {
  /** Document to create */
  data: ImageBlockCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ImageBlockEdge = {
  __typename?: 'ImageBlockEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ImageBlock;
};

/** Identifies documents */
export type ImageBlockManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ImageBlockWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ImageBlockWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ImageBlockWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageEntry_every?: InputMaybe<ImageEntryWhereInput>;
  imageEntry_none?: InputMaybe<ImageEntryWhereInput>;
  imageEntry_some?: InputMaybe<ImageEntryWhereInput>;
};

export enum ImageBlockOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ImageBlockParent = CvPage;

export type ImageBlockParentConnectInput = {
  CvPage?: InputMaybe<CvPageConnectInput>;
};

export type ImageBlockParentCreateInput = {
  CvPage?: InputMaybe<CvPageCreateInput>;
};

export type ImageBlockParentCreateManyInlineInput = {
  /** Connect multiple existing ImageBlockParent documents */
  connect?: InputMaybe<Array<ImageBlockParentWhereUniqueInput>>;
  /** Create and connect multiple existing ImageBlockParent documents */
  create?: InputMaybe<Array<ImageBlockParentCreateInput>>;
};

export type ImageBlockParentCreateOneInlineInput = {
  /** Connect one existing ImageBlockParent document */
  connect?: InputMaybe<ImageBlockParentWhereUniqueInput>;
  /** Create and connect one ImageBlockParent document */
  create?: InputMaybe<ImageBlockParentCreateInput>;
};

export type ImageBlockParentUpdateInput = {
  CvPage?: InputMaybe<CvPageUpdateInput>;
};

export type ImageBlockParentUpdateManyInlineInput = {
  /** Connect multiple existing ImageBlockParent documents */
  connect?: InputMaybe<Array<ImageBlockParentConnectInput>>;
  /** Create and connect multiple ImageBlockParent documents */
  create?: InputMaybe<Array<ImageBlockParentCreateInput>>;
  /** Delete multiple ImageBlockParent documents */
  delete?: InputMaybe<Array<ImageBlockParentWhereUniqueInput>>;
  /** Disconnect multiple ImageBlockParent documents */
  disconnect?: InputMaybe<Array<ImageBlockParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ImageBlockParent documents */
  set?: InputMaybe<Array<ImageBlockParentWhereUniqueInput>>;
  /** Update multiple ImageBlockParent documents */
  update?: InputMaybe<Array<ImageBlockParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ImageBlockParent documents */
  upsert?: InputMaybe<Array<ImageBlockParentUpsertWithNestedWhereUniqueInput>>;
};

export type ImageBlockParentUpdateManyWithNestedWhereInput = {
  CvPage?: InputMaybe<CvPageUpdateManyWithNestedWhereInput>;
};

export type ImageBlockParentUpdateOneInlineInput = {
  /** Connect existing ImageBlockParent document */
  connect?: InputMaybe<ImageBlockParentWhereUniqueInput>;
  /** Create and connect one ImageBlockParent document */
  create?: InputMaybe<ImageBlockParentCreateInput>;
  /** Delete currently connected ImageBlockParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ImageBlockParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ImageBlockParent document */
  update?: InputMaybe<ImageBlockParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ImageBlockParent document */
  upsert?: InputMaybe<ImageBlockParentUpsertWithNestedWhereUniqueInput>;
};

export type ImageBlockParentUpdateWithNestedWhereUniqueInput = {
  CvPage?: InputMaybe<CvPageUpdateWithNestedWhereUniqueInput>;
};

export type ImageBlockParentUpsertWithNestedWhereUniqueInput = {
  CvPage?: InputMaybe<CvPageUpsertWithNestedWhereUniqueInput>;
};

export type ImageBlockParentWhereInput = {
  CvPage?: InputMaybe<CvPageWhereInput>;
};

export type ImageBlockParentWhereUniqueInput = {
  CvPage?: InputMaybe<CvPageWhereUniqueInput>;
};

export type ImageBlockUpdateInput = {
  imageEntry?: InputMaybe<ImageEntryUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<ImageBlockUpdateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type ImageBlockUpdateLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']>;
};

export type ImageBlockUpdateLocalizationInput = {
  data: ImageBlockUpdateLocalizationDataInput;
  locale: Locale;
};

export type ImageBlockUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ImageBlockCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ImageBlockUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ImageBlockUpsertLocalizationInput>>;
};

export type ImageBlockUpdateManyInlineInput = {
  /** Create and connect multiple ImageBlock component instances */
  create?: InputMaybe<Array<ImageBlockCreateWithPositionInput>>;
  /** Delete multiple ImageBlock documents */
  delete?: InputMaybe<Array<ImageBlockWhereUniqueInput>>;
  /** Update multiple ImageBlock component instances */
  update?: InputMaybe<Array<ImageBlockUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ImageBlock component instances */
  upsert?: InputMaybe<Array<ImageBlockUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ImageBlockUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: InputMaybe<ImageBlockUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type ImageBlockUpdateManyLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']>;
};

export type ImageBlockUpdateManyLocalizationInput = {
  data: ImageBlockUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ImageBlockUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ImageBlockUpdateManyLocalizationInput>>;
};

export type ImageBlockUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ImageBlockUpdateManyInput;
  /** Document search */
  where: ImageBlockWhereInput;
};

export type ImageBlockUpdateOneInlineInput = {
  /** Create and connect one ImageBlock document */
  create?: InputMaybe<ImageBlockCreateInput>;
  /** Delete currently connected ImageBlock document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single ImageBlock document */
  update?: InputMaybe<ImageBlockUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ImageBlock document */
  upsert?: InputMaybe<ImageBlockUpsertWithNestedWhereUniqueInput>;
};

export type ImageBlockUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ImageBlockUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ImageBlockWhereUniqueInput;
};

export type ImageBlockUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ImageBlockUpdateInput;
  /** Unique document search */
  where: ImageBlockWhereUniqueInput;
};

export type ImageBlockUpsertInput = {
  /** Create document if it didn't exist */
  create: ImageBlockCreateInput;
  /** Update document if it exists */
  update: ImageBlockUpdateInput;
};

export type ImageBlockUpsertLocalizationInput = {
  create: ImageBlockCreateLocalizationDataInput;
  locale: Locale;
  update: ImageBlockUpdateLocalizationDataInput;
};

export type ImageBlockUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ImageBlockUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ImageBlockWhereUniqueInput;
};

export type ImageBlockUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ImageBlockUpsertInput;
  /** Unique document search */
  where: ImageBlockWhereUniqueInput;
};

/** Identifies documents */
export type ImageBlockWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ImageBlockWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ImageBlockWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ImageBlockWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageEntry_every?: InputMaybe<ImageEntryWhereInput>;
  imageEntry_none?: InputMaybe<ImageEntryWhereInput>;
  imageEntry_some?: InputMaybe<ImageEntryWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

/** References ImageBlock record uniquely */
export type ImageBlockWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Image with alt text for search engine optimization purposes. */
export type ImageEntry = {
  __typename?: 'ImageEntry';
  altText: Scalars['String'];
  /** The unique identifier */
  id: Scalars['ID'];
  identifier: Scalars['String'];
  image: Asset;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<ImageEntry>;
  /** System stage field */
  stage: Stage;
};


/** Image with alt text for search engine optimization purposes. */
export type ImageEntryImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Image with alt text for search engine optimization purposes. */
export type ImageEntryLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};

export type ImageEntryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ImageEntryWhereUniqueInput;
};

/** A connection to a list of items. */
export type ImageEntryConnection = {
  __typename?: 'ImageEntryConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ImageEntryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ImageEntryCreateInput = {
  /** altText input for default locale (en) */
  altText: Scalars['String'];
  identifier: Scalars['String'];
  image: AssetCreateOneInlineInput;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ImageEntryCreateLocalizationsInput>;
};

export type ImageEntryCreateLocalizationDataInput = {
  altText: Scalars['String'];
};

export type ImageEntryCreateLocalizationInput = {
  /** Localization input */
  data: ImageEntryCreateLocalizationDataInput;
  locale: Locale;
};

export type ImageEntryCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ImageEntryCreateLocalizationInput>>;
};

export type ImageEntryCreateManyInlineInput = {
  /** Create and connect multiple existing ImageEntry documents */
  create?: InputMaybe<Array<ImageEntryCreateInput>>;
};

export type ImageEntryCreateOneInlineInput = {
  /** Create and connect one ImageEntry document */
  create?: InputMaybe<ImageEntryCreateInput>;
};

export type ImageEntryCreateWithPositionInput = {
  /** Document to create */
  data: ImageEntryCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ImageEntryEdge = {
  __typename?: 'ImageEntryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ImageEntry;
};

/** Identifies documents */
export type ImageEntryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ImageEntryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ImageEntryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ImageEntryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  identifier_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  identifier_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  identifier_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  identifier_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  identifier_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  identifier_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  identifier_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  identifier_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  identifier_starts_with?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetWhereInput>;
};

export enum ImageEntryOrderByInput {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IdentifierAsc = 'identifier_ASC',
  IdentifierDesc = 'identifier_DESC'
}

export type ImageEntryParent = ImageBlock;

export type ImageEntryParentConnectInput = {
  ImageBlock?: InputMaybe<ImageBlockConnectInput>;
};

export type ImageEntryParentCreateInput = {
  ImageBlock?: InputMaybe<ImageBlockCreateInput>;
};

export type ImageEntryParentCreateManyInlineInput = {
  /** Create and connect multiple existing ImageEntryParent documents */
  create?: InputMaybe<Array<ImageEntryParentCreateInput>>;
};

export type ImageEntryParentCreateOneInlineInput = {
  /** Create and connect one ImageEntryParent document */
  create?: InputMaybe<ImageEntryParentCreateInput>;
};

export type ImageEntryParentCreateWithPositionInput = {
  ImageBlock?: InputMaybe<ImageBlockCreateWithPositionInput>;
};

export type ImageEntryParentUpdateInput = {
  ImageBlock?: InputMaybe<ImageBlockUpdateInput>;
};

export type ImageEntryParentUpdateManyInlineInput = {
  /** Create and connect multiple ImageEntryParent component instances */
  create?: InputMaybe<Array<ImageEntryParentCreateWithPositionInput>>;
  /** Delete multiple ImageEntryParent documents */
  delete?: InputMaybe<Array<ImageEntryParentWhereUniqueInput>>;
  /** Update multiple ImageEntryParent component instances */
  update?: InputMaybe<Array<ImageEntryParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ImageEntryParent component instances */
  upsert?: InputMaybe<Array<ImageEntryParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ImageEntryParentUpdateManyWithNestedWhereInput = {
  ImageBlock?: InputMaybe<ImageBlockUpdateManyWithNestedWhereInput>;
};

export type ImageEntryParentUpdateOneInlineInput = {
  /** Create and connect one ImageEntryParent document */
  create?: InputMaybe<ImageEntryParentCreateInput>;
  /** Delete currently connected ImageEntryParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single ImageEntryParent document */
  update?: InputMaybe<ImageEntryParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ImageEntryParent document */
  upsert?: InputMaybe<ImageEntryParentUpsertWithNestedWhereUniqueInput>;
};

export type ImageEntryParentUpdateWithNestedWhereUniqueAndPositionInput = {
  ImageBlock?: InputMaybe<ImageBlockUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type ImageEntryParentUpdateWithNestedWhereUniqueInput = {
  ImageBlock?: InputMaybe<ImageBlockUpdateWithNestedWhereUniqueInput>;
};

export type ImageEntryParentUpsertWithNestedWhereUniqueAndPositionInput = {
  ImageBlock?: InputMaybe<ImageBlockUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type ImageEntryParentUpsertWithNestedWhereUniqueInput = {
  ImageBlock?: InputMaybe<ImageBlockUpsertWithNestedWhereUniqueInput>;
};

export type ImageEntryParentWhereInput = {
  ImageBlock?: InputMaybe<ImageBlockWhereInput>;
};

export type ImageEntryParentWhereUniqueInput = {
  ImageBlock?: InputMaybe<ImageBlockWhereUniqueInput>;
};

export type ImageEntryUpdateInput = {
  /** altText input for default locale (en) */
  altText?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<ImageEntryUpdateLocalizationsInput>;
};

export type ImageEntryUpdateLocalizationDataInput = {
  altText?: InputMaybe<Scalars['String']>;
};

export type ImageEntryUpdateLocalizationInput = {
  data: ImageEntryUpdateLocalizationDataInput;
  locale: Locale;
};

export type ImageEntryUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ImageEntryCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ImageEntryUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ImageEntryUpsertLocalizationInput>>;
};

export type ImageEntryUpdateManyInlineInput = {
  /** Create and connect multiple ImageEntry component instances */
  create?: InputMaybe<Array<ImageEntryCreateWithPositionInput>>;
  /** Delete multiple ImageEntry documents */
  delete?: InputMaybe<Array<ImageEntryWhereUniqueInput>>;
  /** Update multiple ImageEntry component instances */
  update?: InputMaybe<Array<ImageEntryUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ImageEntry component instances */
  upsert?: InputMaybe<Array<ImageEntryUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ImageEntryUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>;
};

export type ImageEntryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ImageEntryUpdateManyInput;
  /** Document search */
  where: ImageEntryWhereInput;
};

export type ImageEntryUpdateOneInlineInput = {
  /** Create and connect one ImageEntry document */
  create?: InputMaybe<ImageEntryCreateInput>;
  /** Delete currently connected ImageEntry document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single ImageEntry document */
  update?: InputMaybe<ImageEntryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ImageEntry document */
  upsert?: InputMaybe<ImageEntryUpsertWithNestedWhereUniqueInput>;
};

export type ImageEntryUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ImageEntryUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ImageEntryWhereUniqueInput;
};

export type ImageEntryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ImageEntryUpdateInput;
  /** Unique document search */
  where: ImageEntryWhereUniqueInput;
};

export type ImageEntryUpsertInput = {
  /** Create document if it didn't exist */
  create: ImageEntryCreateInput;
  /** Update document if it exists */
  update: ImageEntryUpdateInput;
};

export type ImageEntryUpsertLocalizationInput = {
  create: ImageEntryCreateLocalizationDataInput;
  locale: Locale;
  update: ImageEntryUpdateLocalizationDataInput;
};

export type ImageEntryUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ImageEntryUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ImageEntryWhereUniqueInput;
};

export type ImageEntryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ImageEntryUpsertInput;
  /** Unique document search */
  where: ImageEntryWhereUniqueInput;
};

/** Identifies documents */
export type ImageEntryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ImageEntryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ImageEntryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ImageEntryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  altText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  altText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  altText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  altText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  altText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  altText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  altText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  altText_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  identifier_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  identifier_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  identifier_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  identifier_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  identifier_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  identifier_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  identifier_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  identifier_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  identifier_starts_with?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetWhereInput>;
};

/** References ImageEntry record uniquely */
export type ImageEntryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

export type Link = {
  __typename?: 'Link';
  href: Scalars['String'];
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Link>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
};


export type LinkLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};

/** A connection to a list of items. */
export type LinkConnection = {
  __typename?: 'LinkConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LinkEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LinkCreateInput = {
  /** href input for default locale (en) */
  href: Scalars['String'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<LinkCreateLocalizationsInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type LinkCreateLocalizationDataInput = {
  href: Scalars['String'];
};

export type LinkCreateLocalizationInput = {
  /** Localization input */
  data: LinkCreateLocalizationDataInput;
  locale: Locale;
};

export type LinkCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<LinkCreateLocalizationInput>>;
};

export type LinkCreateWithPositionInput = {
  /** Document to create */
  data: LinkCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type LinkEdge = {
  __typename?: 'LinkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Link;
};

/** Identifies documents */
export type LinkManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LinkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

export enum LinkOrderByInput {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type LinkUpdateInput = {
  /** href input for default locale (en) */
  href?: InputMaybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: InputMaybe<LinkUpdateLocalizationsInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type LinkUpdateLocalizationDataInput = {
  href?: InputMaybe<Scalars['String']>;
};

export type LinkUpdateLocalizationInput = {
  data: LinkUpdateLocalizationDataInput;
  locale: Locale;
};

export type LinkUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<LinkCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<LinkUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<LinkUpsertLocalizationInput>>;
};

export type LinkUpdateManyInput = {
  /** href input for default locale (en) */
  href?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<LinkUpdateManyLocalizationsInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type LinkUpdateManyLocalizationDataInput = {
  href?: InputMaybe<Scalars['String']>;
};

export type LinkUpdateManyLocalizationInput = {
  data: LinkUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type LinkUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<LinkUpdateManyLocalizationInput>>;
};

export type LinkUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LinkUpdateManyInput;
  /** Document search */
  where: LinkWhereInput;
};

export type LinkUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<LinkUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: LinkWhereUniqueInput;
};

export type LinkUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LinkUpdateInput;
  /** Unique document search */
  where: LinkWhereUniqueInput;
};

export type LinkUpsertInput = {
  /** Create document if it didn't exist */
  create: LinkCreateInput;
  /** Update document if it exists */
  update: LinkUpdateInput;
};

export type LinkUpsertLocalizationInput = {
  create: LinkCreateLocalizationDataInput;
  locale: Locale;
  update: LinkUpdateLocalizationDataInput;
};

export type LinkUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<LinkUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: LinkWhereUniqueInput;
};

export type LinkUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LinkUpsertInput;
  /** Unique document search */
  where: LinkWhereUniqueInput;
};

/** Identifies documents */
export type LinkWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LinkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  href_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  href_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  href_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  href_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  href_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  href_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  href_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

/** References Link record uniquely */
export type LinkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type List = {
  __typename?: 'List';
  anchorList?: Maybe<Scalars['Boolean']>;
  /** The unique identifier */
  id: Scalars['ID'];
  identifier: Scalars['String'];
  listEntry: Array<ListEntry>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<List>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
};


export type ListListEntryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ListEntryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ListEntryWhereInput>;
};


export type ListLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};

export type ListConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ListWhereUniqueInput;
};

/** A connection to a list of items. */
export type ListConnection = {
  __typename?: 'ListConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ListEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ListCreateInput = {
  anchorList?: InputMaybe<Scalars['Boolean']>;
  identifier: Scalars['String'];
  listEntry?: InputMaybe<ListEntryCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ListCreateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type ListCreateLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']>;
};

export type ListCreateLocalizationInput = {
  /** Localization input */
  data: ListCreateLocalizationDataInput;
  locale: Locale;
};

export type ListCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ListCreateLocalizationInput>>;
};

export type ListCreateManyInlineInput = {
  /** Create and connect multiple existing List documents */
  create?: InputMaybe<Array<ListCreateInput>>;
};

export type ListCreateOneInlineInput = {
  /** Create and connect one List document */
  create?: InputMaybe<ListCreateInput>;
};

export type ListCreateWithPositionInput = {
  /** Document to create */
  data: ListCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ListEdge = {
  __typename?: 'ListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: List;
};

export type ListEntry = {
  __typename?: 'ListEntry';
  description: Array<Scalars['String']>;
  href?: Maybe<Href>;
  /** The unique identifier */
  id: Scalars['ID'];
  identifier: Scalars['String'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<ListEntry>;
  /** Only visible for authorized persons. */
  private?: Maybe<Scalars['Boolean']>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String'];
};


export type ListEntryHrefArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ListEntryLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};

export type ListEntryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ListEntryWhereUniqueInput;
};

/** A connection to a list of items. */
export type ListEntryConnection = {
  __typename?: 'ListEntryConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ListEntryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ListEntryCreateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Array<Scalars['String']>>;
  href?: InputMaybe<HrefCreateOneInlineInput>;
  identifier: Scalars['String'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ListEntryCreateLocalizationsInput>;
  private?: InputMaybe<Scalars['Boolean']>;
  /** title input for default locale (en) */
  title: Scalars['String'];
};

export type ListEntryCreateLocalizationDataInput = {
  description?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
};

export type ListEntryCreateLocalizationInput = {
  /** Localization input */
  data: ListEntryCreateLocalizationDataInput;
  locale: Locale;
};

export type ListEntryCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ListEntryCreateLocalizationInput>>;
};

export type ListEntryCreateManyInlineInput = {
  /** Create and connect multiple existing ListEntry documents */
  create?: InputMaybe<Array<ListEntryCreateInput>>;
};

export type ListEntryCreateOneInlineInput = {
  /** Create and connect one ListEntry document */
  create?: InputMaybe<ListEntryCreateInput>;
};

export type ListEntryCreateWithPositionInput = {
  /** Document to create */
  data: ListEntryCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ListEntryEdge = {
  __typename?: 'ListEntryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ListEntry;
};

/** Identifies documents */
export type ListEntryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ListEntryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ListEntryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ListEntryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<HrefWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  identifier_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  identifier_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  identifier_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  identifier_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  identifier_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  identifier_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  identifier_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  identifier_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  identifier_starts_with?: InputMaybe<Scalars['String']>;
  private?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  private_not?: InputMaybe<Scalars['Boolean']>;
};

export enum ListEntryOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IdentifierAsc = 'identifier_ASC',
  IdentifierDesc = 'identifier_DESC',
  PrivateAsc = 'private_ASC',
  PrivateDesc = 'private_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ListEntryParent = List;

export type ListEntryParentConnectInput = {
  List?: InputMaybe<ListConnectInput>;
};

export type ListEntryParentCreateInput = {
  List?: InputMaybe<ListCreateInput>;
};

export type ListEntryParentCreateManyInlineInput = {
  /** Create and connect multiple existing ListEntryParent documents */
  create?: InputMaybe<Array<ListEntryParentCreateInput>>;
};

export type ListEntryParentCreateOneInlineInput = {
  /** Create and connect one ListEntryParent document */
  create?: InputMaybe<ListEntryParentCreateInput>;
};

export type ListEntryParentCreateWithPositionInput = {
  List?: InputMaybe<ListCreateWithPositionInput>;
};

export type ListEntryParentUpdateInput = {
  List?: InputMaybe<ListUpdateInput>;
};

export type ListEntryParentUpdateManyInlineInput = {
  /** Create and connect multiple ListEntryParent component instances */
  create?: InputMaybe<Array<ListEntryParentCreateWithPositionInput>>;
  /** Delete multiple ListEntryParent documents */
  delete?: InputMaybe<Array<ListEntryParentWhereUniqueInput>>;
  /** Update multiple ListEntryParent component instances */
  update?: InputMaybe<Array<ListEntryParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ListEntryParent component instances */
  upsert?: InputMaybe<Array<ListEntryParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ListEntryParentUpdateManyWithNestedWhereInput = {
  List?: InputMaybe<ListUpdateManyWithNestedWhereInput>;
};

export type ListEntryParentUpdateOneInlineInput = {
  /** Create and connect one ListEntryParent document */
  create?: InputMaybe<ListEntryParentCreateInput>;
  /** Delete currently connected ListEntryParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single ListEntryParent document */
  update?: InputMaybe<ListEntryParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ListEntryParent document */
  upsert?: InputMaybe<ListEntryParentUpsertWithNestedWhereUniqueInput>;
};

export type ListEntryParentUpdateWithNestedWhereUniqueAndPositionInput = {
  List?: InputMaybe<ListUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type ListEntryParentUpdateWithNestedWhereUniqueInput = {
  List?: InputMaybe<ListUpdateWithNestedWhereUniqueInput>;
};

export type ListEntryParentUpsertWithNestedWhereUniqueAndPositionInput = {
  List?: InputMaybe<ListUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type ListEntryParentUpsertWithNestedWhereUniqueInput = {
  List?: InputMaybe<ListUpsertWithNestedWhereUniqueInput>;
};

export type ListEntryParentWhereInput = {
  List?: InputMaybe<ListWhereInput>;
};

export type ListEntryParentWhereUniqueInput = {
  List?: InputMaybe<ListWhereUniqueInput>;
};

export type ListEntryUpdateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Array<Scalars['String']>>;
  href?: InputMaybe<HrefUpdateOneInlineInput>;
  identifier?: InputMaybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: InputMaybe<ListEntryUpdateLocalizationsInput>;
  private?: InputMaybe<Scalars['Boolean']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type ListEntryUpdateLocalizationDataInput = {
  description?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ListEntryUpdateLocalizationInput = {
  data: ListEntryUpdateLocalizationDataInput;
  locale: Locale;
};

export type ListEntryUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ListEntryCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ListEntryUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ListEntryUpsertLocalizationInput>>;
};

export type ListEntryUpdateManyInlineInput = {
  /** Create and connect multiple ListEntry component instances */
  create?: InputMaybe<Array<ListEntryCreateWithPositionInput>>;
  /** Delete multiple ListEntry documents */
  delete?: InputMaybe<Array<ListEntryWhereUniqueInput>>;
  /** Update multiple ListEntry component instances */
  update?: InputMaybe<Array<ListEntryUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ListEntry component instances */
  upsert?: InputMaybe<Array<ListEntryUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ListEntryUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Array<Scalars['String']>>;
  identifier?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ListEntryUpdateManyLocalizationsInput>;
  private?: InputMaybe<Scalars['Boolean']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type ListEntryUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ListEntryUpdateManyLocalizationInput = {
  data: ListEntryUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ListEntryUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ListEntryUpdateManyLocalizationInput>>;
};

export type ListEntryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ListEntryUpdateManyInput;
  /** Document search */
  where: ListEntryWhereInput;
};

export type ListEntryUpdateOneInlineInput = {
  /** Create and connect one ListEntry document */
  create?: InputMaybe<ListEntryCreateInput>;
  /** Delete currently connected ListEntry document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single ListEntry document */
  update?: InputMaybe<ListEntryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ListEntry document */
  upsert?: InputMaybe<ListEntryUpsertWithNestedWhereUniqueInput>;
};

export type ListEntryUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ListEntryUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ListEntryWhereUniqueInput;
};

export type ListEntryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ListEntryUpdateInput;
  /** Unique document search */
  where: ListEntryWhereUniqueInput;
};

export type ListEntryUpsertInput = {
  /** Create document if it didn't exist */
  create: ListEntryCreateInput;
  /** Update document if it exists */
  update: ListEntryUpdateInput;
};

export type ListEntryUpsertLocalizationInput = {
  create: ListEntryCreateLocalizationDataInput;
  locale: Locale;
  update: ListEntryUpdateLocalizationDataInput;
};

export type ListEntryUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ListEntryUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ListEntryWhereUniqueInput;
};

export type ListEntryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ListEntryUpsertInput;
  /** Unique document search */
  where: ListEntryWhereUniqueInput;
};

/** Identifies documents */
export type ListEntryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ListEntryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ListEntryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ListEntryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  description?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  description_contains_all?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  description_contains_none?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  description_contains_some?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  description_not?: InputMaybe<Array<Scalars['String']>>;
  href?: InputMaybe<HrefWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  identifier_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  identifier_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  identifier_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  identifier_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  identifier_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  identifier_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  identifier_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  identifier_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  identifier_starts_with?: InputMaybe<Scalars['String']>;
  private?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  private_not?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

/** References ListEntry record uniquely */
export type ListEntryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Identifies documents */
export type ListManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  anchorList?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  anchorList_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  identifier_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  identifier_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  identifier_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  identifier_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  identifier_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  identifier_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  identifier_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  identifier_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  identifier_starts_with?: InputMaybe<Scalars['String']>;
  listEntry_every?: InputMaybe<ListEntryWhereInput>;
  listEntry_none?: InputMaybe<ListEntryWhereInput>;
  listEntry_some?: InputMaybe<ListEntryWhereInput>;
};

export enum ListOrderByInput {
  AnchorListAsc = 'anchorList_ASC',
  AnchorListDesc = 'anchorList_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IdentifierAsc = 'identifier_ASC',
  IdentifierDesc = 'identifier_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ListParent = CvPage;

export type ListParentConnectInput = {
  CvPage?: InputMaybe<CvPageConnectInput>;
};

export type ListParentCreateInput = {
  CvPage?: InputMaybe<CvPageCreateInput>;
};

export type ListParentCreateManyInlineInput = {
  /** Connect multiple existing ListParent documents */
  connect?: InputMaybe<Array<ListParentWhereUniqueInput>>;
  /** Create and connect multiple existing ListParent documents */
  create?: InputMaybe<Array<ListParentCreateInput>>;
};

export type ListParentCreateOneInlineInput = {
  /** Connect one existing ListParent document */
  connect?: InputMaybe<ListParentWhereUniqueInput>;
  /** Create and connect one ListParent document */
  create?: InputMaybe<ListParentCreateInput>;
};

export type ListParentUpdateInput = {
  CvPage?: InputMaybe<CvPageUpdateInput>;
};

export type ListParentUpdateManyInlineInput = {
  /** Connect multiple existing ListParent documents */
  connect?: InputMaybe<Array<ListParentConnectInput>>;
  /** Create and connect multiple ListParent documents */
  create?: InputMaybe<Array<ListParentCreateInput>>;
  /** Delete multiple ListParent documents */
  delete?: InputMaybe<Array<ListParentWhereUniqueInput>>;
  /** Disconnect multiple ListParent documents */
  disconnect?: InputMaybe<Array<ListParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ListParent documents */
  set?: InputMaybe<Array<ListParentWhereUniqueInput>>;
  /** Update multiple ListParent documents */
  update?: InputMaybe<Array<ListParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ListParent documents */
  upsert?: InputMaybe<Array<ListParentUpsertWithNestedWhereUniqueInput>>;
};

export type ListParentUpdateManyWithNestedWhereInput = {
  CvPage?: InputMaybe<CvPageUpdateManyWithNestedWhereInput>;
};

export type ListParentUpdateOneInlineInput = {
  /** Connect existing ListParent document */
  connect?: InputMaybe<ListParentWhereUniqueInput>;
  /** Create and connect one ListParent document */
  create?: InputMaybe<ListParentCreateInput>;
  /** Delete currently connected ListParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ListParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ListParent document */
  update?: InputMaybe<ListParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ListParent document */
  upsert?: InputMaybe<ListParentUpsertWithNestedWhereUniqueInput>;
};

export type ListParentUpdateWithNestedWhereUniqueInput = {
  CvPage?: InputMaybe<CvPageUpdateWithNestedWhereUniqueInput>;
};

export type ListParentUpsertWithNestedWhereUniqueInput = {
  CvPage?: InputMaybe<CvPageUpsertWithNestedWhereUniqueInput>;
};

export type ListParentWhereInput = {
  CvPage?: InputMaybe<CvPageWhereInput>;
};

export type ListParentWhereUniqueInput = {
  CvPage?: InputMaybe<CvPageWhereUniqueInput>;
};

export type ListUpdateInput = {
  anchorList?: InputMaybe<Scalars['Boolean']>;
  identifier?: InputMaybe<Scalars['String']>;
  listEntry?: InputMaybe<ListEntryUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<ListUpdateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type ListUpdateLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']>;
};

export type ListUpdateLocalizationInput = {
  data: ListUpdateLocalizationDataInput;
  locale: Locale;
};

export type ListUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ListCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ListUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ListUpsertLocalizationInput>>;
};

export type ListUpdateManyInlineInput = {
  /** Create and connect multiple List component instances */
  create?: InputMaybe<Array<ListCreateWithPositionInput>>;
  /** Delete multiple List documents */
  delete?: InputMaybe<Array<ListWhereUniqueInput>>;
  /** Update multiple List component instances */
  update?: InputMaybe<Array<ListUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple List component instances */
  upsert?: InputMaybe<Array<ListUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ListUpdateManyInput = {
  anchorList?: InputMaybe<Scalars['Boolean']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ListUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type ListUpdateManyLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']>;
};

export type ListUpdateManyLocalizationInput = {
  data: ListUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ListUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ListUpdateManyLocalizationInput>>;
};

export type ListUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ListUpdateManyInput;
  /** Document search */
  where: ListWhereInput;
};

export type ListUpdateOneInlineInput = {
  /** Create and connect one List document */
  create?: InputMaybe<ListCreateInput>;
  /** Delete currently connected List document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single List document */
  update?: InputMaybe<ListUpdateWithNestedWhereUniqueInput>;
  /** Upsert single List document */
  upsert?: InputMaybe<ListUpsertWithNestedWhereUniqueInput>;
};

export type ListUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ListUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ListWhereUniqueInput;
};

export type ListUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ListUpdateInput;
  /** Unique document search */
  where: ListWhereUniqueInput;
};

export type ListUpsertInput = {
  /** Create document if it didn't exist */
  create: ListCreateInput;
  /** Update document if it exists */
  update: ListUpdateInput;
};

export type ListUpsertLocalizationInput = {
  create: ListCreateLocalizationDataInput;
  locale: Locale;
  update: ListUpdateLocalizationDataInput;
};

export type ListUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ListUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ListWhereUniqueInput;
};

export type ListUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ListUpsertInput;
  /** Unique document search */
  where: ListWhereUniqueInput;
};

/** Identifies documents */
export type ListWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  anchorList?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  anchorList_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  identifier_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  identifier_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  identifier_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  identifier_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  identifier_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  identifier_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  identifier_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  identifier_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  identifier_starts_with?: InputMaybe<Scalars['String']>;
  listEntry_every?: InputMaybe<ListEntryWhereInput>;
  listEntry_none?: InputMaybe<ListEntryWhereInput>;
  listEntry_some?: InputMaybe<ListEntryWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

/** References List record uniquely */
export type ListWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
  Nl = 'nl'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one cvPage */
  createCvPage?: Maybe<CvPage>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one cvPage from _all_ existing stages. Returns deleted document. */
  deleteCvPage?: Maybe<CvPage>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many CvPage documents
   * @deprecated Please use the new paginated many mutation (deleteManyCvPagesConnection)
   */
  deleteManyCvPages: BatchPayload;
  /** Delete many CvPage documents, return deleted documents */
  deleteManyCvPagesConnection: CvPageConnection;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one cvPage */
  publishCvPage?: Maybe<CvPage>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many CvPage documents
   * @deprecated Please use the new paginated many mutation (publishManyCvPagesConnection)
   */
  publishManyCvPages: BatchPayload;
  /** Publish many CvPage documents */
  publishManyCvPagesConnection: CvPageConnection;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one cvPage */
  schedulePublishCvPage?: Maybe<CvPage>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one cvPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCvPage?: Maybe<CvPage>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one cvPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCvPage?: Maybe<CvPage>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many CvPage documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCvPagesConnection)
   */
  unpublishManyCvPages: BatchPayload;
  /** Find many CvPage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCvPagesConnection: CvPageConnection;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one cvPage */
  updateCvPage?: Maybe<CvPage>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many cvPages
   * @deprecated Please use the new paginated many mutation (updateManyCvPagesConnection)
   */
  updateManyCvPages: BatchPayload;
  /** Update many CvPage documents */
  updateManyCvPagesConnection: CvPageConnection;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one cvPage */
  upsertCvPage?: Maybe<CvPage>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateCvPageArgs = {
  data: CvPageCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteCvPageArgs = {
  where: CvPageWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyCvPagesArgs = {
  where?: InputMaybe<CvPageManyWhereInput>;
};


export type MutationDeleteManyCvPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CvPageManyWhereInput>;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishCvPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: CvPageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyCvPagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<CvPageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyCvPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<CvPageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishCvPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CvPageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishCvPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: CvPageWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishCvPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: CvPageWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyCvPagesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CvPageManyWhereInput>;
};


export type MutationUnpublishManyCvPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CvPageManyWhereInput>;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateCvPageArgs = {
  data: CvPageUpdateInput;
  where: CvPageWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyCvPagesArgs = {
  data: CvPageUpdateManyInput;
  where?: InputMaybe<CvPageManyWhereInput>;
};


export type MutationUpdateManyCvPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: CvPageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CvPageManyWhereInput>;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertCvPageArgs = {
  upsert: CvPageUpsertInput;
  where: CvPageWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single cvPage */
  cvPage?: Maybe<CvPage>;
  /** Retrieve document version */
  cvPageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple cvPages */
  cvPages: Array<CvPage>;
  /** Retrieve multiple cvPages using the Relay connection interface */
  cvPagesConnection: CvPageConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryCvPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CvPageWhereUniqueInput;
};


export type QueryCvPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCvPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CvPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CvPageWhereInput>;
};


export type QueryCvPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CvPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CvPageWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | CvPage;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type SeoAndOpenGraph = {
  __typename?: 'SeoAndOpenGraph';
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<SeoAndOpenGraph>;
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  /** System stage field */
  stage: Stage;
  twitterCard?: Maybe<Scalars['String']>;
};


export type SeoAndOpenGraphLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};

export type SeoAndOpenGraphConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SeoAndOpenGraphWhereUniqueInput;
};

/** A connection to a list of items. */
export type SeoAndOpenGraphConnection = {
  __typename?: 'SeoAndOpenGraphConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SeoAndOpenGraphEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SeoAndOpenGraphCreateInput = {
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<SeoAndOpenGraphCreateLocalizationsInput>;
  /** metaDescription input for default locale (en) */
  metaDescription: Scalars['String'];
  /** metaTitle input for default locale (en) */
  metaTitle: Scalars['String'];
  twitterCard?: InputMaybe<Scalars['String']>;
};

export type SeoAndOpenGraphCreateLocalizationDataInput = {
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
};

export type SeoAndOpenGraphCreateLocalizationInput = {
  /** Localization input */
  data: SeoAndOpenGraphCreateLocalizationDataInput;
  locale: Locale;
};

export type SeoAndOpenGraphCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<SeoAndOpenGraphCreateLocalizationInput>>;
};

export type SeoAndOpenGraphCreateManyInlineInput = {
  /** Create and connect multiple existing SeoAndOpenGraph documents */
  create?: InputMaybe<Array<SeoAndOpenGraphCreateInput>>;
};

export type SeoAndOpenGraphCreateOneInlineInput = {
  /** Create and connect one SeoAndOpenGraph document */
  create?: InputMaybe<SeoAndOpenGraphCreateInput>;
};

export type SeoAndOpenGraphCreateWithPositionInput = {
  /** Document to create */
  data: SeoAndOpenGraphCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type SeoAndOpenGraphEdge = {
  __typename?: 'SeoAndOpenGraphEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: SeoAndOpenGraph;
};

/** Identifies documents */
export type SeoAndOpenGraphManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SeoAndOpenGraphWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SeoAndOpenGraphWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SeoAndOpenGraphWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  twitterCard?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  twitterCard_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  twitterCard_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  twitterCard_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  twitterCard_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  twitterCard_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  twitterCard_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  twitterCard_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  twitterCard_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  twitterCard_starts_with?: InputMaybe<Scalars['String']>;
};

export enum SeoAndOpenGraphOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  TwitterCardAsc = 'twitterCard_ASC',
  TwitterCardDesc = 'twitterCard_DESC'
}

export type SeoAndOpenGraphParent = CvPage;

export type SeoAndOpenGraphParentConnectInput = {
  CvPage?: InputMaybe<CvPageConnectInput>;
};

export type SeoAndOpenGraphParentCreateInput = {
  CvPage?: InputMaybe<CvPageCreateInput>;
};

export type SeoAndOpenGraphParentCreateManyInlineInput = {
  /** Connect multiple existing SeoAndOpenGraphParent documents */
  connect?: InputMaybe<Array<SeoAndOpenGraphParentWhereUniqueInput>>;
  /** Create and connect multiple existing SeoAndOpenGraphParent documents */
  create?: InputMaybe<Array<SeoAndOpenGraphParentCreateInput>>;
};

export type SeoAndOpenGraphParentCreateOneInlineInput = {
  /** Connect one existing SeoAndOpenGraphParent document */
  connect?: InputMaybe<SeoAndOpenGraphParentWhereUniqueInput>;
  /** Create and connect one SeoAndOpenGraphParent document */
  create?: InputMaybe<SeoAndOpenGraphParentCreateInput>;
};

export type SeoAndOpenGraphParentUpdateInput = {
  CvPage?: InputMaybe<CvPageUpdateInput>;
};

export type SeoAndOpenGraphParentUpdateManyInlineInput = {
  /** Connect multiple existing SeoAndOpenGraphParent documents */
  connect?: InputMaybe<Array<SeoAndOpenGraphParentConnectInput>>;
  /** Create and connect multiple SeoAndOpenGraphParent documents */
  create?: InputMaybe<Array<SeoAndOpenGraphParentCreateInput>>;
  /** Delete multiple SeoAndOpenGraphParent documents */
  delete?: InputMaybe<Array<SeoAndOpenGraphParentWhereUniqueInput>>;
  /** Disconnect multiple SeoAndOpenGraphParent documents */
  disconnect?: InputMaybe<Array<SeoAndOpenGraphParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SeoAndOpenGraphParent documents */
  set?: InputMaybe<Array<SeoAndOpenGraphParentWhereUniqueInput>>;
  /** Update multiple SeoAndOpenGraphParent documents */
  update?: InputMaybe<Array<SeoAndOpenGraphParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SeoAndOpenGraphParent documents */
  upsert?: InputMaybe<Array<SeoAndOpenGraphParentUpsertWithNestedWhereUniqueInput>>;
};

export type SeoAndOpenGraphParentUpdateManyWithNestedWhereInput = {
  CvPage?: InputMaybe<CvPageUpdateManyWithNestedWhereInput>;
};

export type SeoAndOpenGraphParentUpdateOneInlineInput = {
  /** Connect existing SeoAndOpenGraphParent document */
  connect?: InputMaybe<SeoAndOpenGraphParentWhereUniqueInput>;
  /** Create and connect one SeoAndOpenGraphParent document */
  create?: InputMaybe<SeoAndOpenGraphParentCreateInput>;
  /** Delete currently connected SeoAndOpenGraphParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected SeoAndOpenGraphParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single SeoAndOpenGraphParent document */
  update?: InputMaybe<SeoAndOpenGraphParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SeoAndOpenGraphParent document */
  upsert?: InputMaybe<SeoAndOpenGraphParentUpsertWithNestedWhereUniqueInput>;
};

export type SeoAndOpenGraphParentUpdateWithNestedWhereUniqueInput = {
  CvPage?: InputMaybe<CvPageUpdateWithNestedWhereUniqueInput>;
};

export type SeoAndOpenGraphParentUpsertWithNestedWhereUniqueInput = {
  CvPage?: InputMaybe<CvPageUpsertWithNestedWhereUniqueInput>;
};

export type SeoAndOpenGraphParentWhereInput = {
  CvPage?: InputMaybe<CvPageWhereInput>;
};

export type SeoAndOpenGraphParentWhereUniqueInput = {
  CvPage?: InputMaybe<CvPageWhereUniqueInput>;
};

export type SeoAndOpenGraphUpdateInput = {
  /** Manage document localizations */
  localizations?: InputMaybe<SeoAndOpenGraphUpdateLocalizationsInput>;
  /** metaDescription input for default locale (en) */
  metaDescription?: InputMaybe<Scalars['String']>;
  /** metaTitle input for default locale (en) */
  metaTitle?: InputMaybe<Scalars['String']>;
  twitterCard?: InputMaybe<Scalars['String']>;
};

export type SeoAndOpenGraphUpdateLocalizationDataInput = {
  metaDescription?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
};

export type SeoAndOpenGraphUpdateLocalizationInput = {
  data: SeoAndOpenGraphUpdateLocalizationDataInput;
  locale: Locale;
};

export type SeoAndOpenGraphUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<SeoAndOpenGraphCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<SeoAndOpenGraphUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<SeoAndOpenGraphUpsertLocalizationInput>>;
};

export type SeoAndOpenGraphUpdateManyInlineInput = {
  /** Create and connect multiple SeoAndOpenGraph component instances */
  create?: InputMaybe<Array<SeoAndOpenGraphCreateWithPositionInput>>;
  /** Delete multiple SeoAndOpenGraph documents */
  delete?: InputMaybe<Array<SeoAndOpenGraphWhereUniqueInput>>;
  /** Update multiple SeoAndOpenGraph component instances */
  update?: InputMaybe<Array<SeoAndOpenGraphUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple SeoAndOpenGraph component instances */
  upsert?: InputMaybe<Array<SeoAndOpenGraphUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SeoAndOpenGraphUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: InputMaybe<SeoAndOpenGraphUpdateManyLocalizationsInput>;
  /** metaDescription input for default locale (en) */
  metaDescription?: InputMaybe<Scalars['String']>;
  /** metaTitle input for default locale (en) */
  metaTitle?: InputMaybe<Scalars['String']>;
  twitterCard?: InputMaybe<Scalars['String']>;
};

export type SeoAndOpenGraphUpdateManyLocalizationDataInput = {
  metaDescription?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
};

export type SeoAndOpenGraphUpdateManyLocalizationInput = {
  data: SeoAndOpenGraphUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type SeoAndOpenGraphUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<SeoAndOpenGraphUpdateManyLocalizationInput>>;
};

export type SeoAndOpenGraphUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SeoAndOpenGraphUpdateManyInput;
  /** Document search */
  where: SeoAndOpenGraphWhereInput;
};

export type SeoAndOpenGraphUpdateOneInlineInput = {
  /** Create and connect one SeoAndOpenGraph document */
  create?: InputMaybe<SeoAndOpenGraphCreateInput>;
  /** Delete currently connected SeoAndOpenGraph document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single SeoAndOpenGraph document */
  update?: InputMaybe<SeoAndOpenGraphUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SeoAndOpenGraph document */
  upsert?: InputMaybe<SeoAndOpenGraphUpsertWithNestedWhereUniqueInput>;
};

export type SeoAndOpenGraphUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<SeoAndOpenGraphUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SeoAndOpenGraphWhereUniqueInput;
};

export type SeoAndOpenGraphUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SeoAndOpenGraphUpdateInput;
  /** Unique document search */
  where: SeoAndOpenGraphWhereUniqueInput;
};

export type SeoAndOpenGraphUpsertInput = {
  /** Create document if it didn't exist */
  create: SeoAndOpenGraphCreateInput;
  /** Update document if it exists */
  update: SeoAndOpenGraphUpdateInput;
};

export type SeoAndOpenGraphUpsertLocalizationInput = {
  create: SeoAndOpenGraphCreateLocalizationDataInput;
  locale: Locale;
  update: SeoAndOpenGraphUpdateLocalizationDataInput;
};

export type SeoAndOpenGraphUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<SeoAndOpenGraphUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SeoAndOpenGraphWhereUniqueInput;
};

export type SeoAndOpenGraphUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SeoAndOpenGraphUpsertInput;
  /** Unique document search */
  where: SeoAndOpenGraphWhereUniqueInput;
};

/** Identifies documents */
export type SeoAndOpenGraphWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SeoAndOpenGraphWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SeoAndOpenGraphWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SeoAndOpenGraphWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  metaDescription_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  metaDescription_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  metaDescription_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  metaTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  metaTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  metaTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  metaTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaTitle_starts_with?: InputMaybe<Scalars['String']>;
  twitterCard?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  twitterCard_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  twitterCard_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  twitterCard_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  twitterCard_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  twitterCard_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  twitterCard_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  twitterCard_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  twitterCard_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  twitterCard_starts_with?: InputMaybe<Scalars['String']>;
};

/** References SeoAndOpenGraph record uniquely */
export type SeoAndOpenGraphWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type TitleBlock = {
  __typename?: 'TitleBlock';
  /** The unique identifier */
  id: Scalars['ID'];
  identifier: Scalars['String'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<TitleBlock>;
  /** System stage field */
  stage: Stage;
  subSubtitle?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  titleWeight?: Maybe<TitleWeight>;
  verticalOrientation?: Maybe<Scalars['Boolean']>;
};


export type TitleBlockLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};

export type TitleBlockConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TitleBlockWhereUniqueInput;
};

/** A connection to a list of items. */
export type TitleBlockConnection = {
  __typename?: 'TitleBlockConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TitleBlockEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TitleBlockCreateInput = {
  identifier: Scalars['String'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<TitleBlockCreateLocalizationsInput>;
  /** subSubtitle input for default locale (en) */
  subSubtitle?: InputMaybe<Scalars['String']>;
  /** subtitle input for default locale (en) */
  subtitle?: InputMaybe<Scalars['String']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
  titleWeight?: InputMaybe<TitleWeight>;
  verticalOrientation?: InputMaybe<Scalars['Boolean']>;
};

export type TitleBlockCreateLocalizationDataInput = {
  subSubtitle?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TitleBlockCreateLocalizationInput = {
  /** Localization input */
  data: TitleBlockCreateLocalizationDataInput;
  locale: Locale;
};

export type TitleBlockCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<TitleBlockCreateLocalizationInput>>;
};

export type TitleBlockCreateManyInlineInput = {
  /** Create and connect multiple existing TitleBlock documents */
  create?: InputMaybe<Array<TitleBlockCreateInput>>;
};

export type TitleBlockCreateOneInlineInput = {
  /** Create and connect one TitleBlock document */
  create?: InputMaybe<TitleBlockCreateInput>;
};

export type TitleBlockCreateWithPositionInput = {
  /** Document to create */
  data: TitleBlockCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TitleBlockEdge = {
  __typename?: 'TitleBlockEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TitleBlock;
};

/** Identifies documents */
export type TitleBlockManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TitleBlockWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TitleBlockWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TitleBlockWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  identifier_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  identifier_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  identifier_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  identifier_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  identifier_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  identifier_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  identifier_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  identifier_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  identifier_starts_with?: InputMaybe<Scalars['String']>;
  titleWeight?: InputMaybe<TitleWeight>;
  /** All values that are contained in given list. */
  titleWeight_in?: InputMaybe<Array<InputMaybe<TitleWeight>>>;
  /** All values that are not equal to given value. */
  titleWeight_not?: InputMaybe<TitleWeight>;
  /** All values that are not contained in given list. */
  titleWeight_not_in?: InputMaybe<Array<InputMaybe<TitleWeight>>>;
  verticalOrientation?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  verticalOrientation_not?: InputMaybe<Scalars['Boolean']>;
};

export enum TitleBlockOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IdentifierAsc = 'identifier_ASC',
  IdentifierDesc = 'identifier_DESC',
  SubSubtitleAsc = 'subSubtitle_ASC',
  SubSubtitleDesc = 'subSubtitle_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleWeightAsc = 'titleWeight_ASC',
  TitleWeightDesc = 'titleWeight_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  VerticalOrientationAsc = 'verticalOrientation_ASC',
  VerticalOrientationDesc = 'verticalOrientation_DESC'
}

export type TitleBlockParent = CvPage;

export type TitleBlockParentConnectInput = {
  CvPage?: InputMaybe<CvPageConnectInput>;
};

export type TitleBlockParentCreateInput = {
  CvPage?: InputMaybe<CvPageCreateInput>;
};

export type TitleBlockParentCreateManyInlineInput = {
  /** Connect multiple existing TitleBlockParent documents */
  connect?: InputMaybe<Array<TitleBlockParentWhereUniqueInput>>;
  /** Create and connect multiple existing TitleBlockParent documents */
  create?: InputMaybe<Array<TitleBlockParentCreateInput>>;
};

export type TitleBlockParentCreateOneInlineInput = {
  /** Connect one existing TitleBlockParent document */
  connect?: InputMaybe<TitleBlockParentWhereUniqueInput>;
  /** Create and connect one TitleBlockParent document */
  create?: InputMaybe<TitleBlockParentCreateInput>;
};

export type TitleBlockParentUpdateInput = {
  CvPage?: InputMaybe<CvPageUpdateInput>;
};

export type TitleBlockParentUpdateManyInlineInput = {
  /** Connect multiple existing TitleBlockParent documents */
  connect?: InputMaybe<Array<TitleBlockParentConnectInput>>;
  /** Create and connect multiple TitleBlockParent documents */
  create?: InputMaybe<Array<TitleBlockParentCreateInput>>;
  /** Delete multiple TitleBlockParent documents */
  delete?: InputMaybe<Array<TitleBlockParentWhereUniqueInput>>;
  /** Disconnect multiple TitleBlockParent documents */
  disconnect?: InputMaybe<Array<TitleBlockParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TitleBlockParent documents */
  set?: InputMaybe<Array<TitleBlockParentWhereUniqueInput>>;
  /** Update multiple TitleBlockParent documents */
  update?: InputMaybe<Array<TitleBlockParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TitleBlockParent documents */
  upsert?: InputMaybe<Array<TitleBlockParentUpsertWithNestedWhereUniqueInput>>;
};

export type TitleBlockParentUpdateManyWithNestedWhereInput = {
  CvPage?: InputMaybe<CvPageUpdateManyWithNestedWhereInput>;
};

export type TitleBlockParentUpdateOneInlineInput = {
  /** Connect existing TitleBlockParent document */
  connect?: InputMaybe<TitleBlockParentWhereUniqueInput>;
  /** Create and connect one TitleBlockParent document */
  create?: InputMaybe<TitleBlockParentCreateInput>;
  /** Delete currently connected TitleBlockParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected TitleBlockParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single TitleBlockParent document */
  update?: InputMaybe<TitleBlockParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TitleBlockParent document */
  upsert?: InputMaybe<TitleBlockParentUpsertWithNestedWhereUniqueInput>;
};

export type TitleBlockParentUpdateWithNestedWhereUniqueInput = {
  CvPage?: InputMaybe<CvPageUpdateWithNestedWhereUniqueInput>;
};

export type TitleBlockParentUpsertWithNestedWhereUniqueInput = {
  CvPage?: InputMaybe<CvPageUpsertWithNestedWhereUniqueInput>;
};

export type TitleBlockParentWhereInput = {
  CvPage?: InputMaybe<CvPageWhereInput>;
};

export type TitleBlockParentWhereUniqueInput = {
  CvPage?: InputMaybe<CvPageWhereUniqueInput>;
};

export type TitleBlockUpdateInput = {
  identifier?: InputMaybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: InputMaybe<TitleBlockUpdateLocalizationsInput>;
  /** subSubtitle input for default locale (en) */
  subSubtitle?: InputMaybe<Scalars['String']>;
  /** subtitle input for default locale (en) */
  subtitle?: InputMaybe<Scalars['String']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
  titleWeight?: InputMaybe<TitleWeight>;
  verticalOrientation?: InputMaybe<Scalars['Boolean']>;
};

export type TitleBlockUpdateLocalizationDataInput = {
  subSubtitle?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TitleBlockUpdateLocalizationInput = {
  data: TitleBlockUpdateLocalizationDataInput;
  locale: Locale;
};

export type TitleBlockUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<TitleBlockCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<TitleBlockUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<TitleBlockUpsertLocalizationInput>>;
};

export type TitleBlockUpdateManyInlineInput = {
  /** Create and connect multiple TitleBlock component instances */
  create?: InputMaybe<Array<TitleBlockCreateWithPositionInput>>;
  /** Delete multiple TitleBlock documents */
  delete?: InputMaybe<Array<TitleBlockWhereUniqueInput>>;
  /** Update multiple TitleBlock component instances */
  update?: InputMaybe<Array<TitleBlockUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TitleBlock component instances */
  upsert?: InputMaybe<Array<TitleBlockUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TitleBlockUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: InputMaybe<TitleBlockUpdateManyLocalizationsInput>;
  /** subSubtitle input for default locale (en) */
  subSubtitle?: InputMaybe<Scalars['String']>;
  /** subtitle input for default locale (en) */
  subtitle?: InputMaybe<Scalars['String']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
  titleWeight?: InputMaybe<TitleWeight>;
  verticalOrientation?: InputMaybe<Scalars['Boolean']>;
};

export type TitleBlockUpdateManyLocalizationDataInput = {
  subSubtitle?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TitleBlockUpdateManyLocalizationInput = {
  data: TitleBlockUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type TitleBlockUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<TitleBlockUpdateManyLocalizationInput>>;
};

export type TitleBlockUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TitleBlockUpdateManyInput;
  /** Document search */
  where: TitleBlockWhereInput;
};

export type TitleBlockUpdateOneInlineInput = {
  /** Create and connect one TitleBlock document */
  create?: InputMaybe<TitleBlockCreateInput>;
  /** Delete currently connected TitleBlock document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single TitleBlock document */
  update?: InputMaybe<TitleBlockUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TitleBlock document */
  upsert?: InputMaybe<TitleBlockUpsertWithNestedWhereUniqueInput>;
};

export type TitleBlockUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TitleBlockUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TitleBlockWhereUniqueInput;
};

export type TitleBlockUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TitleBlockUpdateInput;
  /** Unique document search */
  where: TitleBlockWhereUniqueInput;
};

export type TitleBlockUpsertInput = {
  /** Create document if it didn't exist */
  create: TitleBlockCreateInput;
  /** Update document if it exists */
  update: TitleBlockUpdateInput;
};

export type TitleBlockUpsertLocalizationInput = {
  create: TitleBlockCreateLocalizationDataInput;
  locale: Locale;
  update: TitleBlockUpdateLocalizationDataInput;
};

export type TitleBlockUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TitleBlockUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TitleBlockWhereUniqueInput;
};

export type TitleBlockUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TitleBlockUpsertInput;
  /** Unique document search */
  where: TitleBlockWhereUniqueInput;
};

/** Identifies documents */
export type TitleBlockWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TitleBlockWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TitleBlockWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TitleBlockWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  identifier_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  identifier_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  identifier_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  identifier_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  identifier_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  identifier_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  identifier_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  identifier_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  identifier_starts_with?: InputMaybe<Scalars['String']>;
  subSubtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subSubtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subSubtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subSubtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subSubtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subSubtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subSubtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subSubtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subSubtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subSubtitle_starts_with?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  titleWeight?: InputMaybe<TitleWeight>;
  /** All values that are contained in given list. */
  titleWeight_in?: InputMaybe<Array<InputMaybe<TitleWeight>>>;
  /** All values that are not equal to given value. */
  titleWeight_not?: InputMaybe<TitleWeight>;
  /** All values that are not contained in given list. */
  titleWeight_not_in?: InputMaybe<Array<InputMaybe<TitleWeight>>>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  verticalOrientation?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  verticalOrientation_not?: InputMaybe<Scalars['Boolean']>;
};

/** References TitleBlock record uniquely */
export type TitleBlockWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
};

/** This indicated the importance of the title and its search engine optimisation weight. */
export enum TitleWeight {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3'
}

export type TopicList = {
  __typename?: 'TopicList';
  /** The unique identifier */
  id: Scalars['ID'];
  identifier: Scalars['String'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<TopicList>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  topicListEntry: Array<TopicListEntry>;
};


export type TopicListLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type TopicListTopicListEntryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TopicListEntryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TopicListEntryWhereInput>;
};

export type TopicListConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TopicListWhereUniqueInput;
};

/** A connection to a list of items. */
export type TopicListConnection = {
  __typename?: 'TopicListConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TopicListEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TopicListCreateInput = {
  identifier: Scalars['String'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<TopicListCreateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
  topicListEntry?: InputMaybe<TopicListEntryCreateManyInlineInput>;
};

export type TopicListCreateLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']>;
};

export type TopicListCreateLocalizationInput = {
  /** Localization input */
  data: TopicListCreateLocalizationDataInput;
  locale: Locale;
};

export type TopicListCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<TopicListCreateLocalizationInput>>;
};

export type TopicListCreateManyInlineInput = {
  /** Create and connect multiple existing TopicList documents */
  create?: InputMaybe<Array<TopicListCreateInput>>;
};

export type TopicListCreateOneInlineInput = {
  /** Create and connect one TopicList document */
  create?: InputMaybe<TopicListCreateInput>;
};

export type TopicListCreateWithPositionInput = {
  /** Document to create */
  data: TopicListCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TopicListEdge = {
  __typename?: 'TopicListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TopicList;
};

export type TopicListEntry = {
  __typename?: 'TopicListEntry';
  description?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  identifier: Scalars['String'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<TopicListEntry>;
  /** System stage field */
  stage: Stage;
  subDescription?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type TopicListEntryLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};

export type TopicListEntryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TopicListEntryWhereUniqueInput;
};

/** A connection to a list of items. */
export type TopicListEntryConnection = {
  __typename?: 'TopicListEntryConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TopicListEntryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TopicListEntryCreateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  identifier: Scalars['String'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<TopicListEntryCreateLocalizationsInput>;
  /** subDescription input for default locale (en) */
  subDescription?: InputMaybe<Scalars['String']>;
  /** subtitle input for default locale (en) */
  subtitle?: InputMaybe<Scalars['String']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type TopicListEntryCreateLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']>;
  subDescription?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TopicListEntryCreateLocalizationInput = {
  /** Localization input */
  data: TopicListEntryCreateLocalizationDataInput;
  locale: Locale;
};

export type TopicListEntryCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<TopicListEntryCreateLocalizationInput>>;
};

export type TopicListEntryCreateManyInlineInput = {
  /** Create and connect multiple existing TopicListEntry documents */
  create?: InputMaybe<Array<TopicListEntryCreateInput>>;
};

export type TopicListEntryCreateOneInlineInput = {
  /** Create and connect one TopicListEntry document */
  create?: InputMaybe<TopicListEntryCreateInput>;
};

export type TopicListEntryCreateWithPositionInput = {
  /** Document to create */
  data: TopicListEntryCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TopicListEntryEdge = {
  __typename?: 'TopicListEntryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TopicListEntry;
};

/** Identifies documents */
export type TopicListEntryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TopicListEntryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TopicListEntryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TopicListEntryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  identifier_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  identifier_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  identifier_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  identifier_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  identifier_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  identifier_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  identifier_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  identifier_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  identifier_starts_with?: InputMaybe<Scalars['String']>;
};

export enum TopicListEntryOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IdentifierAsc = 'identifier_ASC',
  IdentifierDesc = 'identifier_DESC',
  SubDescriptionAsc = 'subDescription_ASC',
  SubDescriptionDesc = 'subDescription_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type TopicListEntryParent = TopicList;

export type TopicListEntryParentConnectInput = {
  TopicList?: InputMaybe<TopicListConnectInput>;
};

export type TopicListEntryParentCreateInput = {
  TopicList?: InputMaybe<TopicListCreateInput>;
};

export type TopicListEntryParentCreateManyInlineInput = {
  /** Create and connect multiple existing TopicListEntryParent documents */
  create?: InputMaybe<Array<TopicListEntryParentCreateInput>>;
};

export type TopicListEntryParentCreateOneInlineInput = {
  /** Create and connect one TopicListEntryParent document */
  create?: InputMaybe<TopicListEntryParentCreateInput>;
};

export type TopicListEntryParentCreateWithPositionInput = {
  TopicList?: InputMaybe<TopicListCreateWithPositionInput>;
};

export type TopicListEntryParentUpdateInput = {
  TopicList?: InputMaybe<TopicListUpdateInput>;
};

export type TopicListEntryParentUpdateManyInlineInput = {
  /** Create and connect multiple TopicListEntryParent component instances */
  create?: InputMaybe<Array<TopicListEntryParentCreateWithPositionInput>>;
  /** Delete multiple TopicListEntryParent documents */
  delete?: InputMaybe<Array<TopicListEntryParentWhereUniqueInput>>;
  /** Update multiple TopicListEntryParent component instances */
  update?: InputMaybe<Array<TopicListEntryParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TopicListEntryParent component instances */
  upsert?: InputMaybe<Array<TopicListEntryParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TopicListEntryParentUpdateManyWithNestedWhereInput = {
  TopicList?: InputMaybe<TopicListUpdateManyWithNestedWhereInput>;
};

export type TopicListEntryParentUpdateOneInlineInput = {
  /** Create and connect one TopicListEntryParent document */
  create?: InputMaybe<TopicListEntryParentCreateInput>;
  /** Delete currently connected TopicListEntryParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single TopicListEntryParent document */
  update?: InputMaybe<TopicListEntryParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TopicListEntryParent document */
  upsert?: InputMaybe<TopicListEntryParentUpsertWithNestedWhereUniqueInput>;
};

export type TopicListEntryParentUpdateWithNestedWhereUniqueAndPositionInput = {
  TopicList?: InputMaybe<TopicListUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type TopicListEntryParentUpdateWithNestedWhereUniqueInput = {
  TopicList?: InputMaybe<TopicListUpdateWithNestedWhereUniqueInput>;
};

export type TopicListEntryParentUpsertWithNestedWhereUniqueAndPositionInput = {
  TopicList?: InputMaybe<TopicListUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type TopicListEntryParentUpsertWithNestedWhereUniqueInput = {
  TopicList?: InputMaybe<TopicListUpsertWithNestedWhereUniqueInput>;
};

export type TopicListEntryParentWhereInput = {
  TopicList?: InputMaybe<TopicListWhereInput>;
};

export type TopicListEntryParentWhereUniqueInput = {
  TopicList?: InputMaybe<TopicListWhereUniqueInput>;
};

export type TopicListEntryUpdateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: InputMaybe<TopicListEntryUpdateLocalizationsInput>;
  /** subDescription input for default locale (en) */
  subDescription?: InputMaybe<Scalars['String']>;
  /** subtitle input for default locale (en) */
  subtitle?: InputMaybe<Scalars['String']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type TopicListEntryUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']>;
  subDescription?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TopicListEntryUpdateLocalizationInput = {
  data: TopicListEntryUpdateLocalizationDataInput;
  locale: Locale;
};

export type TopicListEntryUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<TopicListEntryCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<TopicListEntryUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<TopicListEntryUpsertLocalizationInput>>;
};

export type TopicListEntryUpdateManyInlineInput = {
  /** Create and connect multiple TopicListEntry component instances */
  create?: InputMaybe<Array<TopicListEntryCreateWithPositionInput>>;
  /** Delete multiple TopicListEntry documents */
  delete?: InputMaybe<Array<TopicListEntryWhereUniqueInput>>;
  /** Update multiple TopicListEntry component instances */
  update?: InputMaybe<Array<TopicListEntryUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TopicListEntry component instances */
  upsert?: InputMaybe<Array<TopicListEntryUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TopicListEntryUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<TopicListEntryUpdateManyLocalizationsInput>;
  /** subDescription input for default locale (en) */
  subDescription?: InputMaybe<Scalars['String']>;
  /** subtitle input for default locale (en) */
  subtitle?: InputMaybe<Scalars['String']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type TopicListEntryUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']>;
  subDescription?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TopicListEntryUpdateManyLocalizationInput = {
  data: TopicListEntryUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type TopicListEntryUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<TopicListEntryUpdateManyLocalizationInput>>;
};

export type TopicListEntryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TopicListEntryUpdateManyInput;
  /** Document search */
  where: TopicListEntryWhereInput;
};

export type TopicListEntryUpdateOneInlineInput = {
  /** Create and connect one TopicListEntry document */
  create?: InputMaybe<TopicListEntryCreateInput>;
  /** Delete currently connected TopicListEntry document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single TopicListEntry document */
  update?: InputMaybe<TopicListEntryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TopicListEntry document */
  upsert?: InputMaybe<TopicListEntryUpsertWithNestedWhereUniqueInput>;
};

export type TopicListEntryUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TopicListEntryUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TopicListEntryWhereUniqueInput;
};

export type TopicListEntryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TopicListEntryUpdateInput;
  /** Unique document search */
  where: TopicListEntryWhereUniqueInput;
};

export type TopicListEntryUpsertInput = {
  /** Create document if it didn't exist */
  create: TopicListEntryCreateInput;
  /** Update document if it exists */
  update: TopicListEntryUpdateInput;
};

export type TopicListEntryUpsertLocalizationInput = {
  create: TopicListEntryCreateLocalizationDataInput;
  locale: Locale;
  update: TopicListEntryUpdateLocalizationDataInput;
};

export type TopicListEntryUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TopicListEntryUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TopicListEntryWhereUniqueInput;
};

export type TopicListEntryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TopicListEntryUpsertInput;
  /** Unique document search */
  where: TopicListEntryWhereUniqueInput;
};

/** Identifies documents */
export type TopicListEntryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TopicListEntryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TopicListEntryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TopicListEntryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  identifier_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  identifier_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  identifier_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  identifier_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  identifier_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  identifier_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  identifier_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  identifier_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  identifier_starts_with?: InputMaybe<Scalars['String']>;
  subDescription?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subDescription_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subDescription_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subDescription_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subDescription_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subDescription_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subDescription_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subDescription_starts_with?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

/** References TopicListEntry record uniquely */
export type TopicListEntryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Identifies documents */
export type TopicListManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TopicListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TopicListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TopicListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  identifier_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  identifier_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  identifier_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  identifier_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  identifier_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  identifier_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  identifier_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  identifier_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  identifier_starts_with?: InputMaybe<Scalars['String']>;
  topicListEntry_every?: InputMaybe<TopicListEntryWhereInput>;
  topicListEntry_none?: InputMaybe<TopicListEntryWhereInput>;
  topicListEntry_some?: InputMaybe<TopicListEntryWhereInput>;
};

export enum TopicListOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IdentifierAsc = 'identifier_ASC',
  IdentifierDesc = 'identifier_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type TopicListParent = CvPage;

export type TopicListParentConnectInput = {
  CvPage?: InputMaybe<CvPageConnectInput>;
};

export type TopicListParentCreateInput = {
  CvPage?: InputMaybe<CvPageCreateInput>;
};

export type TopicListParentCreateManyInlineInput = {
  /** Connect multiple existing TopicListParent documents */
  connect?: InputMaybe<Array<TopicListParentWhereUniqueInput>>;
  /** Create and connect multiple existing TopicListParent documents */
  create?: InputMaybe<Array<TopicListParentCreateInput>>;
};

export type TopicListParentCreateOneInlineInput = {
  /** Connect one existing TopicListParent document */
  connect?: InputMaybe<TopicListParentWhereUniqueInput>;
  /** Create and connect one TopicListParent document */
  create?: InputMaybe<TopicListParentCreateInput>;
};

export type TopicListParentUpdateInput = {
  CvPage?: InputMaybe<CvPageUpdateInput>;
};

export type TopicListParentUpdateManyInlineInput = {
  /** Connect multiple existing TopicListParent documents */
  connect?: InputMaybe<Array<TopicListParentConnectInput>>;
  /** Create and connect multiple TopicListParent documents */
  create?: InputMaybe<Array<TopicListParentCreateInput>>;
  /** Delete multiple TopicListParent documents */
  delete?: InputMaybe<Array<TopicListParentWhereUniqueInput>>;
  /** Disconnect multiple TopicListParent documents */
  disconnect?: InputMaybe<Array<TopicListParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TopicListParent documents */
  set?: InputMaybe<Array<TopicListParentWhereUniqueInput>>;
  /** Update multiple TopicListParent documents */
  update?: InputMaybe<Array<TopicListParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TopicListParent documents */
  upsert?: InputMaybe<Array<TopicListParentUpsertWithNestedWhereUniqueInput>>;
};

export type TopicListParentUpdateManyWithNestedWhereInput = {
  CvPage?: InputMaybe<CvPageUpdateManyWithNestedWhereInput>;
};

export type TopicListParentUpdateOneInlineInput = {
  /** Connect existing TopicListParent document */
  connect?: InputMaybe<TopicListParentWhereUniqueInput>;
  /** Create and connect one TopicListParent document */
  create?: InputMaybe<TopicListParentCreateInput>;
  /** Delete currently connected TopicListParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected TopicListParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single TopicListParent document */
  update?: InputMaybe<TopicListParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TopicListParent document */
  upsert?: InputMaybe<TopicListParentUpsertWithNestedWhereUniqueInput>;
};

export type TopicListParentUpdateWithNestedWhereUniqueInput = {
  CvPage?: InputMaybe<CvPageUpdateWithNestedWhereUniqueInput>;
};

export type TopicListParentUpsertWithNestedWhereUniqueInput = {
  CvPage?: InputMaybe<CvPageUpsertWithNestedWhereUniqueInput>;
};

export type TopicListParentWhereInput = {
  CvPage?: InputMaybe<CvPageWhereInput>;
};

export type TopicListParentWhereUniqueInput = {
  CvPage?: InputMaybe<CvPageWhereUniqueInput>;
};

export type TopicListUpdateInput = {
  identifier?: InputMaybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: InputMaybe<TopicListUpdateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
  topicListEntry?: InputMaybe<TopicListEntryUpdateManyInlineInput>;
};

export type TopicListUpdateLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']>;
};

export type TopicListUpdateLocalizationInput = {
  data: TopicListUpdateLocalizationDataInput;
  locale: Locale;
};

export type TopicListUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<TopicListCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<TopicListUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<TopicListUpsertLocalizationInput>>;
};

export type TopicListUpdateManyInlineInput = {
  /** Create and connect multiple TopicList component instances */
  create?: InputMaybe<Array<TopicListCreateWithPositionInput>>;
  /** Delete multiple TopicList documents */
  delete?: InputMaybe<Array<TopicListWhereUniqueInput>>;
  /** Update multiple TopicList component instances */
  update?: InputMaybe<Array<TopicListUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TopicList component instances */
  upsert?: InputMaybe<Array<TopicListUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TopicListUpdateManyInput = {
  identifier?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<TopicListUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type TopicListUpdateManyLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']>;
};

export type TopicListUpdateManyLocalizationInput = {
  data: TopicListUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type TopicListUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<TopicListUpdateManyLocalizationInput>>;
};

export type TopicListUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TopicListUpdateManyInput;
  /** Document search */
  where: TopicListWhereInput;
};

export type TopicListUpdateOneInlineInput = {
  /** Create and connect one TopicList document */
  create?: InputMaybe<TopicListCreateInput>;
  /** Delete currently connected TopicList document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single TopicList document */
  update?: InputMaybe<TopicListUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TopicList document */
  upsert?: InputMaybe<TopicListUpsertWithNestedWhereUniqueInput>;
};

export type TopicListUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TopicListUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TopicListWhereUniqueInput;
};

export type TopicListUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TopicListUpdateInput;
  /** Unique document search */
  where: TopicListWhereUniqueInput;
};

export type TopicListUpsertInput = {
  /** Create document if it didn't exist */
  create: TopicListCreateInput;
  /** Update document if it exists */
  update: TopicListUpdateInput;
};

export type TopicListUpsertLocalizationInput = {
  create: TopicListCreateLocalizationDataInput;
  locale: Locale;
  update: TopicListUpdateLocalizationDataInput;
};

export type TopicListUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TopicListUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TopicListWhereUniqueInput;
};

export type TopicListUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TopicListUpsertInput;
  /** Unique document search */
  where: TopicListWhereUniqueInput;
};

/** Identifies documents */
export type TopicListWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TopicListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TopicListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TopicListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  identifier_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  identifier_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  identifier_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  identifier_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  identifier_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  identifier_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  identifier_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  identifier_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  identifier_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  topicListEntry_every?: InputMaybe<TopicListEntryWhereInput>;
  topicListEntry_none?: InputMaybe<TopicListEntryWhereInput>;
  topicListEntry_some?: InputMaybe<TopicListEntryWhereInput>;
};

/** References TopicList record uniquely */
export type TopicListWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}
