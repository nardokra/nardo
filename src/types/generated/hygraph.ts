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
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<CvPage>;
  /** List of CvPage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<CvPage>;
  profileImageBlock?: Maybe<ImageBlock>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  titleBlock?: Maybe<TitleBlock>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type CvPageCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
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


export type CvPageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type CvPageLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type CvPageProfileImageBlockArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CvPagePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
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


export type CvPageTitleBlockArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CvPageUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type CvPageUpdatedByArgs = {
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
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<CvPageCreateLocalizationsInput>;
  profileImageBlock?: InputMaybe<ImageBlockCreateOneInlineInput>;
  slug: Scalars['String'];
  titleBlock?: InputMaybe<TitleBlockCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
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
  titleBlock?: InputMaybe<TitleBlockWhereInput>;
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
  /** Manage document localizations */
  localizations?: InputMaybe<CvPageUpdateLocalizationsInput>;
  profileImageBlock?: InputMaybe<ImageBlockUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  titleBlock?: InputMaybe<TitleBlockUpdateOneInlineInput>;
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
  titleBlock?: InputMaybe<TitleBlockWhereInput>;
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
  /** Create one navigation */
  createNavigation?: Maybe<Navigation>;
  /** Create one navigationItem */
  createNavigationItem?: Maybe<NavigationItem>;
  /** Create one personalProfile */
  createPersonalProfile?: Maybe<PersonalProfile>;
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
  /**
   * Delete many NavigationItem documents
   * @deprecated Please use the new paginated many mutation (deleteManyNavigationItemsConnection)
   */
  deleteManyNavigationItems: BatchPayload;
  /** Delete many NavigationItem documents, return deleted documents */
  deleteManyNavigationItemsConnection: NavigationItemConnection;
  /**
   * Delete many Navigation documents
   * @deprecated Please use the new paginated many mutation (deleteManyNavigationsConnection)
   */
  deleteManyNavigations: BatchPayload;
  /** Delete many Navigation documents, return deleted documents */
  deleteManyNavigationsConnection: NavigationConnection;
  /**
   * Delete many PersonalProfile documents
   * @deprecated Please use the new paginated many mutation (deleteManyPersonalProfilesConnection)
   */
  deleteManyPersonalProfiles: BatchPayload;
  /** Delete many PersonalProfile documents, return deleted documents */
  deleteManyPersonalProfilesConnection: PersonalProfileConnection;
  /** Delete one navigation from _all_ existing stages. Returns deleted document. */
  deleteNavigation?: Maybe<Navigation>;
  /** Delete one navigationItem from _all_ existing stages. Returns deleted document. */
  deleteNavigationItem?: Maybe<NavigationItem>;
  /** Delete one personalProfile from _all_ existing stages. Returns deleted document. */
  deletePersonalProfile?: Maybe<PersonalProfile>;
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
  /**
   * Publish many NavigationItem documents
   * @deprecated Please use the new paginated many mutation (publishManyNavigationItemsConnection)
   */
  publishManyNavigationItems: BatchPayload;
  /** Publish many NavigationItem documents */
  publishManyNavigationItemsConnection: NavigationItemConnection;
  /**
   * Publish many Navigation documents
   * @deprecated Please use the new paginated many mutation (publishManyNavigationsConnection)
   */
  publishManyNavigations: BatchPayload;
  /** Publish many Navigation documents */
  publishManyNavigationsConnection: NavigationConnection;
  /**
   * Publish many PersonalProfile documents
   * @deprecated Please use the new paginated many mutation (publishManyPersonalProfilesConnection)
   */
  publishManyPersonalProfiles: BatchPayload;
  /** Publish many PersonalProfile documents */
  publishManyPersonalProfilesConnection: PersonalProfileConnection;
  /** Publish one navigation */
  publishNavigation?: Maybe<Navigation>;
  /** Publish one navigationItem */
  publishNavigationItem?: Maybe<NavigationItem>;
  /** Publish one personalProfile */
  publishPersonalProfile?: Maybe<PersonalProfile>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one cvPage */
  schedulePublishCvPage?: Maybe<CvPage>;
  /** Schedule to publish one navigation */
  schedulePublishNavigation?: Maybe<Navigation>;
  /** Schedule to publish one navigationItem */
  schedulePublishNavigationItem?: Maybe<NavigationItem>;
  /** Schedule to publish one personalProfile */
  schedulePublishPersonalProfile?: Maybe<PersonalProfile>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one cvPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCvPage?: Maybe<CvPage>;
  /** Unpublish one navigation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNavigation?: Maybe<Navigation>;
  /** Unpublish one navigationItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNavigationItem?: Maybe<NavigationItem>;
  /** Unpublish one personalProfile from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPersonalProfile?: Maybe<PersonalProfile>;
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
  /**
   * Unpublish many NavigationItem documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNavigationItemsConnection)
   */
  unpublishManyNavigationItems: BatchPayload;
  /** Find many NavigationItem documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNavigationItemsConnection: NavigationItemConnection;
  /**
   * Unpublish many Navigation documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNavigationsConnection)
   */
  unpublishManyNavigations: BatchPayload;
  /** Find many Navigation documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNavigationsConnection: NavigationConnection;
  /**
   * Unpublish many PersonalProfile documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPersonalProfilesConnection)
   */
  unpublishManyPersonalProfiles: BatchPayload;
  /** Find many PersonalProfile documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPersonalProfilesConnection: PersonalProfileConnection;
  /** Unpublish one navigation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNavigation?: Maybe<Navigation>;
  /** Unpublish one navigationItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNavigationItem?: Maybe<NavigationItem>;
  /** Unpublish one personalProfile from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPersonalProfile?: Maybe<PersonalProfile>;
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
  /**
   * Update many navigationItems
   * @deprecated Please use the new paginated many mutation (updateManyNavigationItemsConnection)
   */
  updateManyNavigationItems: BatchPayload;
  /** Update many NavigationItem documents */
  updateManyNavigationItemsConnection: NavigationItemConnection;
  /**
   * Update many navigations
   * @deprecated Please use the new paginated many mutation (updateManyNavigationsConnection)
   */
  updateManyNavigations: BatchPayload;
  /** Update many Navigation documents */
  updateManyNavigationsConnection: NavigationConnection;
  /**
   * Update many personalProfiles
   * @deprecated Please use the new paginated many mutation (updateManyPersonalProfilesConnection)
   */
  updateManyPersonalProfiles: BatchPayload;
  /** Update many PersonalProfile documents */
  updateManyPersonalProfilesConnection: PersonalProfileConnection;
  /** Update one navigation */
  updateNavigation?: Maybe<Navigation>;
  /** Update one navigationItem */
  updateNavigationItem?: Maybe<NavigationItem>;
  /** Update one personalProfile */
  updatePersonalProfile?: Maybe<PersonalProfile>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one cvPage */
  upsertCvPage?: Maybe<CvPage>;
  /** Upsert one navigation */
  upsertNavigation?: Maybe<Navigation>;
  /** Upsert one navigationItem */
  upsertNavigationItem?: Maybe<NavigationItem>;
  /** Upsert one personalProfile */
  upsertPersonalProfile?: Maybe<PersonalProfile>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateCvPageArgs = {
  data: CvPageCreateInput;
};


export type MutationCreateNavigationArgs = {
  data: NavigationCreateInput;
};


export type MutationCreateNavigationItemArgs = {
  data: NavigationItemCreateInput;
};


export type MutationCreatePersonalProfileArgs = {
  data: PersonalProfileCreateInput;
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


export type MutationDeleteManyNavigationItemsArgs = {
  where?: InputMaybe<NavigationItemManyWhereInput>;
};


export type MutationDeleteManyNavigationItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationItemManyWhereInput>;
};


export type MutationDeleteManyNavigationsArgs = {
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationDeleteManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationDeleteManyPersonalProfilesArgs = {
  where?: InputMaybe<PersonalProfileManyWhereInput>;
};


export type MutationDeleteManyPersonalProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonalProfileManyWhereInput>;
};


export type MutationDeleteNavigationArgs = {
  where: NavigationWhereUniqueInput;
};


export type MutationDeleteNavigationItemArgs = {
  where: NavigationItemWhereUniqueInput;
};


export type MutationDeletePersonalProfileArgs = {
  where: PersonalProfileWhereUniqueInput;
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


export type MutationPublishManyNavigationItemsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<NavigationItemManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyNavigationItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<NavigationItemManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyNavigationsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationPublishManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationPublishManyPersonalProfilesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PersonalProfileManyWhereInput>;
};


export type MutationPublishManyPersonalProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PersonalProfileManyWhereInput>;
};


export type MutationPublishNavigationArgs = {
  to?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationPublishNavigationItemArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: NavigationItemWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishPersonalProfileArgs = {
  to?: Array<Stage>;
  where: PersonalProfileWhereUniqueInput;
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


export type MutationSchedulePublishNavigationArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationSchedulePublishNavigationItemArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: NavigationItemWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishPersonalProfileArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PersonalProfileWhereUniqueInput;
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


export type MutationScheduleUnpublishNavigationArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: NavigationWhereUniqueInput;
};


export type MutationScheduleUnpublishNavigationItemArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: NavigationItemWhereUniqueInput;
};


export type MutationScheduleUnpublishPersonalProfileArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: PersonalProfileWhereUniqueInput;
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


export type MutationUnpublishManyNavigationItemsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NavigationItemManyWhereInput>;
};


export type MutationUnpublishManyNavigationItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NavigationItemManyWhereInput>;
};


export type MutationUnpublishManyNavigationsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUnpublishManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUnpublishManyPersonalProfilesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PersonalProfileManyWhereInput>;
};


export type MutationUnpublishManyPersonalProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PersonalProfileManyWhereInput>;
};


export type MutationUnpublishNavigationArgs = {
  from?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationUnpublishNavigationItemArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: NavigationItemWhereUniqueInput;
};


export type MutationUnpublishPersonalProfileArgs = {
  from?: Array<Stage>;
  where: PersonalProfileWhereUniqueInput;
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


export type MutationUpdateManyNavigationItemsArgs = {
  data: NavigationItemUpdateManyInput;
  where?: InputMaybe<NavigationItemManyWhereInput>;
};


export type MutationUpdateManyNavigationItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: NavigationItemUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationItemManyWhereInput>;
};


export type MutationUpdateManyNavigationsArgs = {
  data: NavigationUpdateManyInput;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUpdateManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: NavigationUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUpdateManyPersonalProfilesArgs = {
  data: PersonalProfileUpdateManyInput;
  where?: InputMaybe<PersonalProfileManyWhereInput>;
};


export type MutationUpdateManyPersonalProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PersonalProfileUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonalProfileManyWhereInput>;
};


export type MutationUpdateNavigationArgs = {
  data: NavigationUpdateInput;
  where: NavigationWhereUniqueInput;
};


export type MutationUpdateNavigationItemArgs = {
  data: NavigationItemUpdateInput;
  where: NavigationItemWhereUniqueInput;
};


export type MutationUpdatePersonalProfileArgs = {
  data: PersonalProfileUpdateInput;
  where: PersonalProfileWhereUniqueInput;
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


export type MutationUpsertNavigationArgs = {
  upsert: NavigationUpsertInput;
  where: NavigationWhereUniqueInput;
};


export type MutationUpsertNavigationItemArgs = {
  upsert: NavigationItemUpsertInput;
  where: NavigationItemWhereUniqueInput;
};


export type MutationUpsertPersonalProfileArgs = {
  upsert: PersonalProfileUpsertInput;
  where: PersonalProfileWhereUniqueInput;
};

/** Navigation with link items */
export type Navigation = Node & {
  __typename?: 'Navigation';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Navigation>;
  /** List of Navigation versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The items which are displayed in the navigation. */
  navigationItems: Array<NavigationItem>;
  personalProfile?: Maybe<PersonalProfile>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Navigation with link items */
export type NavigationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Navigation with link items */
export type NavigationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Navigation with link items */
export type NavigationHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Navigation with link items */
export type NavigationNavigationItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<NavigationItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationItemWhereInput>;
};


/** Navigation with link items */
export type NavigationPersonalProfileArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Navigation with link items */
export type NavigationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Navigation with link items */
export type NavigationScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Navigation with link items */
export type NavigationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type NavigationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NavigationWhereUniqueInput;
};

/** A connection to a list of items. */
export type NavigationConnection = {
  __typename?: 'NavigationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NavigationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NavigationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  navigationItems?: InputMaybe<NavigationItemCreateManyInlineInput>;
  personalProfile?: InputMaybe<PersonalProfileCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NavigationCreateManyInlineInput = {
  /** Connect multiple existing Navigation documents */
  connect?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Create and connect multiple existing Navigation documents */
  create?: InputMaybe<Array<NavigationCreateInput>>;
};

export type NavigationCreateOneInlineInput = {
  /** Connect one existing Navigation document */
  connect?: InputMaybe<NavigationWhereUniqueInput>;
  /** Create and connect one Navigation document */
  create?: InputMaybe<NavigationCreateInput>;
};

/** An edge in a connection. */
export type NavigationEdge = {
  __typename?: 'NavigationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Navigation;
};

/** Item for routing */
export type NavigationItem = Node & {
  __typename?: 'NavigationItem';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<NavigationItem>;
  /** List of NavigationItem versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<NavigationItem>;
  /** The name that is displayed */
  name: Scalars['String'];
  navigation?: Maybe<Navigation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The slug for routing / linking to pages */
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Item for routing */
export type NavigationItemCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Item for routing */
export type NavigationItemCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Item for routing */
export type NavigationItemDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Item for routing */
export type NavigationItemHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Item for routing */
export type NavigationItemLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Item for routing */
export type NavigationItemNavigationArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Item for routing */
export type NavigationItemPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Item for routing */
export type NavigationItemPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Item for routing */
export type NavigationItemScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Item for routing */
export type NavigationItemUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Item for routing */
export type NavigationItemUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type NavigationItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NavigationItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type NavigationItemConnection = {
  __typename?: 'NavigationItemConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NavigationItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NavigationItemCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<NavigationItemCreateLocalizationsInput>;
  /** name input for default locale (en) */
  name: Scalars['String'];
  navigation?: InputMaybe<NavigationCreateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NavigationItemCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NavigationItemCreateLocalizationInput = {
  /** Localization input */
  data: NavigationItemCreateLocalizationDataInput;
  locale: Locale;
};

export type NavigationItemCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<NavigationItemCreateLocalizationInput>>;
};

export type NavigationItemCreateManyInlineInput = {
  /** Connect multiple existing NavigationItem documents */
  connect?: InputMaybe<Array<NavigationItemWhereUniqueInput>>;
  /** Create and connect multiple existing NavigationItem documents */
  create?: InputMaybe<Array<NavigationItemCreateInput>>;
};

export type NavigationItemCreateOneInlineInput = {
  /** Connect one existing NavigationItem document */
  connect?: InputMaybe<NavigationItemWhereUniqueInput>;
  /** Create and connect one NavigationItem document */
  create?: InputMaybe<NavigationItemCreateInput>;
};

/** An edge in a connection. */
export type NavigationItemEdge = {
  __typename?: 'NavigationItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: NavigationItem;
};

/** Identifies documents */
export type NavigationItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationItemWhereInput>>;
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
  documentInStages_every?: InputMaybe<NavigationItemWhereStageInput>;
  documentInStages_none?: InputMaybe<NavigationItemWhereStageInput>;
  documentInStages_some?: InputMaybe<NavigationItemWhereStageInput>;
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
  navigation?: InputMaybe<NavigationWhereInput>;
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
};

export enum NavigationItemOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NavigationItemUpdateInput = {
  /** Manage document localizations */
  localizations?: InputMaybe<NavigationItemUpdateLocalizationsInput>;
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars['String']>;
  navigation?: InputMaybe<NavigationUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
};

export type NavigationItemUpdateLocalizationDataInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type NavigationItemUpdateLocalizationInput = {
  data: NavigationItemUpdateLocalizationDataInput;
  locale: Locale;
};

export type NavigationItemUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<NavigationItemCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<NavigationItemUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<NavigationItemUpsertLocalizationInput>>;
};

export type NavigationItemUpdateManyInlineInput = {
  /** Connect multiple existing NavigationItem documents */
  connect?: InputMaybe<Array<NavigationItemConnectInput>>;
  /** Create and connect multiple NavigationItem documents */
  create?: InputMaybe<Array<NavigationItemCreateInput>>;
  /** Delete multiple NavigationItem documents */
  delete?: InputMaybe<Array<NavigationItemWhereUniqueInput>>;
  /** Disconnect multiple NavigationItem documents */
  disconnect?: InputMaybe<Array<NavigationItemWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing NavigationItem documents */
  set?: InputMaybe<Array<NavigationItemWhereUniqueInput>>;
  /** Update multiple NavigationItem documents */
  update?: InputMaybe<Array<NavigationItemUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple NavigationItem documents */
  upsert?: InputMaybe<Array<NavigationItemUpsertWithNestedWhereUniqueInput>>;
};

export type NavigationItemUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>;
};

export type NavigationItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NavigationItemUpdateManyInput;
  /** Document search */
  where: NavigationItemWhereInput;
};

export type NavigationItemUpdateOneInlineInput = {
  /** Connect existing NavigationItem document */
  connect?: InputMaybe<NavigationItemWhereUniqueInput>;
  /** Create and connect one NavigationItem document */
  create?: InputMaybe<NavigationItemCreateInput>;
  /** Delete currently connected NavigationItem document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected NavigationItem document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single NavigationItem document */
  update?: InputMaybe<NavigationItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NavigationItem document */
  upsert?: InputMaybe<NavigationItemUpsertWithNestedWhereUniqueInput>;
};

export type NavigationItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NavigationItemUpdateInput;
  /** Unique document search */
  where: NavigationItemWhereUniqueInput;
};

export type NavigationItemUpsertInput = {
  /** Create document if it didn't exist */
  create: NavigationItemCreateInput;
  /** Update document if it exists */
  update: NavigationItemUpdateInput;
};

export type NavigationItemUpsertLocalizationInput = {
  create: NavigationItemCreateLocalizationDataInput;
  locale: Locale;
  update: NavigationItemUpdateLocalizationDataInput;
};

export type NavigationItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NavigationItemUpsertInput;
  /** Unique document search */
  where: NavigationItemWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type NavigationItemWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type NavigationItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationItemWhereInput>>;
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
  documentInStages_every?: InputMaybe<NavigationItemWhereStageInput>;
  documentInStages_none?: InputMaybe<NavigationItemWhereStageInput>;
  documentInStages_some?: InputMaybe<NavigationItemWhereStageInput>;
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
  navigation?: InputMaybe<NavigationWhereInput>;
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
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type NavigationItemWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationItemWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationItemWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationItemWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<NavigationItemWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References NavigationItem record uniquely */
export type NavigationItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** Identifies documents */
export type NavigationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereInput>>;
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
  documentInStages_every?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_none?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_some?: InputMaybe<NavigationWhereStageInput>;
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
  navigationItems_every?: InputMaybe<NavigationItemWhereInput>;
  navigationItems_none?: InputMaybe<NavigationItemWhereInput>;
  navigationItems_some?: InputMaybe<NavigationItemWhereInput>;
  personalProfile?: InputMaybe<PersonalProfileWhereInput>;
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

export enum NavigationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NavigationUpdateInput = {
  navigationItems?: InputMaybe<NavigationItemUpdateManyInlineInput>;
  personalProfile?: InputMaybe<PersonalProfileUpdateOneInlineInput>;
};

export type NavigationUpdateManyInlineInput = {
  /** Connect multiple existing Navigation documents */
  connect?: InputMaybe<Array<NavigationConnectInput>>;
  /** Create and connect multiple Navigation documents */
  create?: InputMaybe<Array<NavigationCreateInput>>;
  /** Delete multiple Navigation documents */
  delete?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Disconnect multiple Navigation documents */
  disconnect?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Navigation documents */
  set?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Update multiple Navigation documents */
  update?: InputMaybe<Array<NavigationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Navigation documents */
  upsert?: InputMaybe<Array<NavigationUpsertWithNestedWhereUniqueInput>>;
};

export type NavigationUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>;
};

export type NavigationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NavigationUpdateManyInput;
  /** Document search */
  where: NavigationWhereInput;
};

export type NavigationUpdateOneInlineInput = {
  /** Connect existing Navigation document */
  connect?: InputMaybe<NavigationWhereUniqueInput>;
  /** Create and connect one Navigation document */
  create?: InputMaybe<NavigationCreateInput>;
  /** Delete currently connected Navigation document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Navigation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Navigation document */
  update?: InputMaybe<NavigationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Navigation document */
  upsert?: InputMaybe<NavigationUpsertWithNestedWhereUniqueInput>;
};

export type NavigationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NavigationUpdateInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

export type NavigationUpsertInput = {
  /** Create document if it didn't exist */
  create: NavigationCreateInput;
  /** Update document if it exists */
  update: NavigationUpdateInput;
};

export type NavigationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NavigationUpsertInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type NavigationWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type NavigationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereInput>>;
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
  documentInStages_every?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_none?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_some?: InputMaybe<NavigationWhereStageInput>;
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
  navigationItems_every?: InputMaybe<NavigationItemWhereInput>;
  navigationItems_none?: InputMaybe<NavigationItemWhereInput>;
  navigationItems_some?: InputMaybe<NavigationItemWhereInput>;
  personalProfile?: InputMaybe<PersonalProfileWhereInput>;
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

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type NavigationWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<NavigationWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Navigation record uniquely */
export type NavigationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
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

/** Enter here your personal info. */
export type PersonalProfile = Node & {
  __typename?: 'PersonalProfile';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<PersonalProfile>;
  firstName: Scalars['String'];
  /** List of PersonalProfile versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Enter here your current job title. */
  jobTitle?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  /** The location you're situated currently. */
  location?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Enter here your personal info. */
export type PersonalProfileCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Enter here your personal info. */
export type PersonalProfileDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Enter here your personal info. */
export type PersonalProfileHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Enter here your personal info. */
export type PersonalProfilePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Enter here your personal info. */
export type PersonalProfileScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Enter here your personal info. */
export type PersonalProfileUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PersonalProfileConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PersonalProfileWhereUniqueInput;
};

/** A connection to a list of items. */
export type PersonalProfileConnection = {
  __typename?: 'PersonalProfileConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PersonalProfileEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PersonalProfileCreateInput = {
  cky4x1deh0lrw01z53tvna2x4?: InputMaybe<NavigationCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  jobTitle?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PersonalProfileCreateManyInlineInput = {
  /** Connect multiple existing PersonalProfile documents */
  connect?: InputMaybe<Array<PersonalProfileWhereUniqueInput>>;
  /** Create and connect multiple existing PersonalProfile documents */
  create?: InputMaybe<Array<PersonalProfileCreateInput>>;
};

export type PersonalProfileCreateOneInlineInput = {
  /** Connect one existing PersonalProfile document */
  connect?: InputMaybe<PersonalProfileWhereUniqueInput>;
  /** Create and connect one PersonalProfile document */
  create?: InputMaybe<PersonalProfileCreateInput>;
};

/** An edge in a connection. */
export type PersonalProfileEdge = {
  __typename?: 'PersonalProfileEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PersonalProfile;
};

/** Identifies documents */
export type PersonalProfileManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PersonalProfileWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PersonalProfileWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PersonalProfileWhereInput>>;
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
  documentInStages_every?: InputMaybe<PersonalProfileWhereStageInput>;
  documentInStages_none?: InputMaybe<PersonalProfileWhereStageInput>;
  documentInStages_some?: InputMaybe<PersonalProfileWhereStageInput>;
  firstName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  firstName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  firstName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  firstName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: InputMaybe<Scalars['String']>;
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
  jobTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  jobTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  jobTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  jobTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  jobTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  jobTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  jobTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  jobTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  jobTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  jobTitle_starts_with?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  lastName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  lastName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  lastName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  location_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']>;
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

export enum PersonalProfileOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  JobTitleAsc = 'jobTitle_ASC',
  JobTitleDesc = 'jobTitle_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PersonalProfileUpdateInput = {
  cky4x1deh0lrw01z53tvna2x4?: InputMaybe<NavigationUpdateManyInlineInput>;
  firstName?: InputMaybe<Scalars['String']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
};

export type PersonalProfileUpdateManyInlineInput = {
  /** Connect multiple existing PersonalProfile documents */
  connect?: InputMaybe<Array<PersonalProfileConnectInput>>;
  /** Create and connect multiple PersonalProfile documents */
  create?: InputMaybe<Array<PersonalProfileCreateInput>>;
  /** Delete multiple PersonalProfile documents */
  delete?: InputMaybe<Array<PersonalProfileWhereUniqueInput>>;
  /** Disconnect multiple PersonalProfile documents */
  disconnect?: InputMaybe<Array<PersonalProfileWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PersonalProfile documents */
  set?: InputMaybe<Array<PersonalProfileWhereUniqueInput>>;
  /** Update multiple PersonalProfile documents */
  update?: InputMaybe<Array<PersonalProfileUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PersonalProfile documents */
  upsert?: InputMaybe<Array<PersonalProfileUpsertWithNestedWhereUniqueInput>>;
};

export type PersonalProfileUpdateManyInput = {
  firstName?: InputMaybe<Scalars['String']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
};

export type PersonalProfileUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PersonalProfileUpdateManyInput;
  /** Document search */
  where: PersonalProfileWhereInput;
};

export type PersonalProfileUpdateOneInlineInput = {
  /** Connect existing PersonalProfile document */
  connect?: InputMaybe<PersonalProfileWhereUniqueInput>;
  /** Create and connect one PersonalProfile document */
  create?: InputMaybe<PersonalProfileCreateInput>;
  /** Delete currently connected PersonalProfile document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected PersonalProfile document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single PersonalProfile document */
  update?: InputMaybe<PersonalProfileUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PersonalProfile document */
  upsert?: InputMaybe<PersonalProfileUpsertWithNestedWhereUniqueInput>;
};

export type PersonalProfileUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PersonalProfileUpdateInput;
  /** Unique document search */
  where: PersonalProfileWhereUniqueInput;
};

export type PersonalProfileUpsertInput = {
  /** Create document if it didn't exist */
  create: PersonalProfileCreateInput;
  /** Update document if it exists */
  update: PersonalProfileUpdateInput;
};

export type PersonalProfileUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PersonalProfileUpsertInput;
  /** Unique document search */
  where: PersonalProfileWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PersonalProfileWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type PersonalProfileWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PersonalProfileWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PersonalProfileWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PersonalProfileWhereInput>>;
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
  documentInStages_every?: InputMaybe<PersonalProfileWhereStageInput>;
  documentInStages_none?: InputMaybe<PersonalProfileWhereStageInput>;
  documentInStages_some?: InputMaybe<PersonalProfileWhereStageInput>;
  firstName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  firstName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  firstName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  firstName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: InputMaybe<Scalars['String']>;
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
  jobTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  jobTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  jobTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  jobTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  jobTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  jobTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  jobTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  jobTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  jobTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  jobTitle_starts_with?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  lastName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  lastName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  lastName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  location_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']>;
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

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PersonalProfileWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PersonalProfileWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PersonalProfileWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PersonalProfileWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PersonalProfileWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References PersonalProfile record uniquely */
export type PersonalProfileWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
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
  /** Retrieve a single navigation */
  navigation?: Maybe<Navigation>;
  /** Retrieve a single navigationItem */
  navigationItem?: Maybe<NavigationItem>;
  /** Retrieve document version */
  navigationItemVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple navigationItems */
  navigationItems: Array<NavigationItem>;
  /** Retrieve multiple navigationItems using the Relay connection interface */
  navigationItemsConnection: NavigationItemConnection;
  /** Retrieve document version */
  navigationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple navigations */
  navigations: Array<Navigation>;
  /** Retrieve multiple navigations using the Relay connection interface */
  navigationsConnection: NavigationConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single personalProfile */
  personalProfile?: Maybe<PersonalProfile>;
  /** Retrieve document version */
  personalProfileVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple personalProfiles */
  personalProfiles: Array<PersonalProfile>;
  /** Retrieve multiple personalProfiles using the Relay connection interface */
  personalProfilesConnection: PersonalProfileConnection;
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


export type QueryNavigationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NavigationWhereUniqueInput;
};


export type QueryNavigationItemArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NavigationItemWhereUniqueInput;
};


export type QueryNavigationItemVersionArgs = {
  where: VersionWhereInput;
};


export type QueryNavigationItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NavigationItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<NavigationItemWhereInput>;
};


export type QueryNavigationItemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NavigationItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<NavigationItemWhereInput>;
};


export type QueryNavigationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryNavigationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NavigationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<NavigationWhereInput>;
};


export type QueryNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NavigationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<NavigationWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPersonalProfileArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PersonalProfileWhereUniqueInput;
};


export type QueryPersonalProfileVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPersonalProfilesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PersonalProfileOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PersonalProfileWhereInput>;
};


export type QueryPersonalProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PersonalProfileOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PersonalProfileWhereInput>;
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

export type ScheduledOperationAffectedDocument = Asset | CvPage | Navigation | NavigationItem | PersonalProfile;

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
  TitleDesc = 'title_DESC'
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