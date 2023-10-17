// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FederatedDatabaseInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#id FederatedDatabaseInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#name FederatedDatabaseInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#project_id FederatedDatabaseInstance#project_id}
  */
  readonly projectId: string;
  /**
  * cloud_provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#cloud_provider_config FederatedDatabaseInstance#cloud_provider_config}
  */
  readonly cloudProviderConfig?: FederatedDatabaseInstanceCloudProviderConfig;
  /**
  * data_process_region block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#data_process_region FederatedDatabaseInstance#data_process_region}
  */
  readonly dataProcessRegion?: FederatedDatabaseInstanceDataProcessRegion;
  /**
  * storage_databases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#storage_databases FederatedDatabaseInstance#storage_databases}
  */
  readonly storageDatabases?: FederatedDatabaseInstanceStorageDatabases[] | cdktf.IResolvable;
  /**
  * storage_stores block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#storage_stores FederatedDatabaseInstance#storage_stores}
  */
  readonly storageStores?: FederatedDatabaseInstanceStorageStores[] | cdktf.IResolvable;
}
export interface FederatedDatabaseInstanceCloudProviderConfigAws {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#role_id FederatedDatabaseInstance#role_id}
  */
  readonly roleId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#test_s3_bucket FederatedDatabaseInstance#test_s3_bucket}
  */
  readonly testS3Bucket: string;
}

export function federatedDatabaseInstanceCloudProviderConfigAwsToTerraform(struct?: FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference | FederatedDatabaseInstanceCloudProviderConfigAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_id: cdktf.stringToTerraform(struct!.roleId),
    test_s3_bucket: cdktf.stringToTerraform(struct!.testS3Bucket),
  }
}

export class FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FederatedDatabaseInstanceCloudProviderConfigAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    if (this._testS3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.testS3Bucket = this._testS3Bucket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedDatabaseInstanceCloudProviderConfigAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleId = undefined;
      this._testS3Bucket = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleId = value.roleId;
      this._testS3Bucket = value.testS3Bucket;
    }
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // iam_assumed_role_arn - computed: true, optional: false, required: false
  public get iamAssumedRoleArn() {
    return this.getStringAttribute('iam_assumed_role_arn');
  }

  // iam_user_arn - computed: true, optional: false, required: false
  public get iamUserArn() {
    return this.getStringAttribute('iam_user_arn');
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // test_s3_bucket - computed: false, optional: false, required: true
  private _testS3Bucket?: string; 
  public get testS3Bucket() {
    return this.getStringAttribute('test_s3_bucket');
  }
  public set testS3Bucket(value: string) {
    this._testS3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testS3BucketInput() {
    return this._testS3Bucket;
  }
}
export interface FederatedDatabaseInstanceCloudProviderConfig {
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#aws FederatedDatabaseInstance#aws}
  */
  readonly aws: FederatedDatabaseInstanceCloudProviderConfigAws;
}

export function federatedDatabaseInstanceCloudProviderConfigToTerraform(struct?: FederatedDatabaseInstanceCloudProviderConfigOutputReference | FederatedDatabaseInstanceCloudProviderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: federatedDatabaseInstanceCloudProviderConfigAwsToTerraform(struct!.aws),
  }
}

export class FederatedDatabaseInstanceCloudProviderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FederatedDatabaseInstanceCloudProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedDatabaseInstanceCloudProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aws.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aws.internalValue = value.aws;
    }
  }

  // aws - computed: false, optional: false, required: true
  private _aws = new FederatedDatabaseInstanceCloudProviderConfigAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: FederatedDatabaseInstanceCloudProviderConfigAws) {
    this._aws.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }
}
export interface FederatedDatabaseInstanceDataProcessRegion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#cloud_provider FederatedDatabaseInstance#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#region FederatedDatabaseInstance#region}
  */
  readonly region: string;
}

export function federatedDatabaseInstanceDataProcessRegionToTerraform(struct?: FederatedDatabaseInstanceDataProcessRegionOutputReference | FederatedDatabaseInstanceDataProcessRegion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider: cdktf.stringToTerraform(struct!.cloudProvider),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export class FederatedDatabaseInstanceDataProcessRegionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FederatedDatabaseInstanceDataProcessRegion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProvider = this._cloudProvider;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedDatabaseInstanceDataProcessRegion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudProvider = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudProvider = value.cloudProvider;
      this._region = value.region;
    }
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#allow_insecure FederatedDatabaseInstance#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#collection FederatedDatabaseInstance#collection}
  */
  readonly collection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#collection_regex FederatedDatabaseInstance#collection_regex}
  */
  readonly collectionRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#database FederatedDatabaseInstance#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#database_regex FederatedDatabaseInstance#database_regex}
  */
  readonly databaseRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#dataset_name FederatedDatabaseInstance#dataset_name}
  */
  readonly datasetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#default_format FederatedDatabaseInstance#default_format}
  */
  readonly defaultFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#path FederatedDatabaseInstance#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#provenance_field_name FederatedDatabaseInstance#provenance_field_name}
  */
  readonly provenanceFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#store_name FederatedDatabaseInstance#store_name}
  */
  readonly storeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#urls FederatedDatabaseInstance#urls}
  */
  readonly urls?: string[];
}

export function federatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesToTerraform(struct?: FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    collection: cdktf.stringToTerraform(struct!.collection),
    collection_regex: cdktf.stringToTerraform(struct!.collectionRegex),
    database: cdktf.stringToTerraform(struct!.database),
    database_regex: cdktf.stringToTerraform(struct!.databaseRegex),
    dataset_name: cdktf.stringToTerraform(struct!.datasetName),
    default_format: cdktf.stringToTerraform(struct!.defaultFormat),
    path: cdktf.stringToTerraform(struct!.path),
    provenance_field_name: cdktf.stringToTerraform(struct!.provenanceFieldName),
    store_name: cdktf.stringToTerraform(struct!.storeName),
    urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.urls),
  }
}

export class FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._collectionRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionRegex = this._collectionRegex;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._databaseRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseRegex = this._databaseRegex;
    }
    if (this._datasetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetName = this._datasetName;
    }
    if (this._defaultFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultFormat = this._defaultFormat;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._provenanceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.provenanceFieldName = this._provenanceFieldName;
    }
    if (this._storeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeName = this._storeName;
    }
    if (this._urls !== undefined) {
      hasAnyValues = true;
      internalValueResult.urls = this._urls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInsecure = undefined;
      this._collection = undefined;
      this._collectionRegex = undefined;
      this._database = undefined;
      this._databaseRegex = undefined;
      this._datasetName = undefined;
      this._defaultFormat = undefined;
      this._path = undefined;
      this._provenanceFieldName = undefined;
      this._storeName = undefined;
      this._urls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInsecure = value.allowInsecure;
      this._collection = value.collection;
      this._collectionRegex = value.collectionRegex;
      this._database = value.database;
      this._databaseRegex = value.databaseRegex;
      this._datasetName = value.datasetName;
      this._defaultFormat = value.defaultFormat;
      this._path = value.path;
      this._provenanceFieldName = value.provenanceFieldName;
      this._storeName = value.storeName;
      this._urls = value.urls;
    }
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // collection - computed: false, optional: true, required: false
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  public resetCollection() {
    this._collection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // collection_regex - computed: false, optional: true, required: false
  private _collectionRegex?: string; 
  public get collectionRegex() {
    return this.getStringAttribute('collection_regex');
  }
  public set collectionRegex(value: string) {
    this._collectionRegex = value;
  }
  public resetCollectionRegex() {
    this._collectionRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionRegexInput() {
    return this._collectionRegex;
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // database_regex - computed: false, optional: true, required: false
  private _databaseRegex?: string; 
  public get databaseRegex() {
    return this.getStringAttribute('database_regex');
  }
  public set databaseRegex(value: string) {
    this._databaseRegex = value;
  }
  public resetDatabaseRegex() {
    this._databaseRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseRegexInput() {
    return this._databaseRegex;
  }

  // dataset_name - computed: false, optional: true, required: false
  private _datasetName?: string; 
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
  public set datasetName(value: string) {
    this._datasetName = value;
  }
  public resetDatasetName() {
    this._datasetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetNameInput() {
    return this._datasetName;
  }

  // default_format - computed: false, optional: true, required: false
  private _defaultFormat?: string; 
  public get defaultFormat() {
    return this.getStringAttribute('default_format');
  }
  public set defaultFormat(value: string) {
    this._defaultFormat = value;
  }
  public resetDefaultFormat() {
    this._defaultFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFormatInput() {
    return this._defaultFormat;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // provenance_field_name - computed: false, optional: true, required: false
  private _provenanceFieldName?: string; 
  public get provenanceFieldName() {
    return this.getStringAttribute('provenance_field_name');
  }
  public set provenanceFieldName(value: string) {
    this._provenanceFieldName = value;
  }
  public resetProvenanceFieldName() {
    this._provenanceFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provenanceFieldNameInput() {
    return this._provenanceFieldName;
  }

  // store_name - computed: false, optional: true, required: false
  private _storeName?: string; 
  public get storeName() {
    return this.getStringAttribute('store_name');
  }
  public set storeName(value: string) {
    this._storeName = value;
  }
  public resetStoreName() {
    this._storeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeNameInput() {
    return this._storeName;
  }

  // urls - computed: false, optional: true, required: false
  private _urls?: string[]; 
  public get urls() {
    return this.getListAttribute('urls');
  }
  public set urls(value: string[]) {
    this._urls = value;
  }
  public resetUrls() {
    this._urls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
  }
}

export class FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList extends cdktf.ComplexList {
  public internalValue? : FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference {
    return new FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FederatedDatabaseInstanceStorageDatabasesCollections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#name FederatedDatabaseInstance#name}
  */
  readonly name?: string;
  /**
  * data_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#data_sources FederatedDatabaseInstance#data_sources}
  */
  readonly dataSources?: FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources[] | cdktf.IResolvable;
}

export function federatedDatabaseInstanceStorageDatabasesCollectionsToTerraform(struct?: FederatedDatabaseInstanceStorageDatabasesCollections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    data_sources: cdktf.listMapper(federatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesToTerraform, true)(struct!.dataSources),
  }
}

export class FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FederatedDatabaseInstanceStorageDatabasesCollections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._dataSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSources = this._dataSources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedDatabaseInstanceStorageDatabasesCollections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._dataSources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._dataSources.internalValue = value.dataSources;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // data_sources - computed: false, optional: true, required: false
  private _dataSources = new FederatedDatabaseInstanceStorageDatabasesCollectionsDataSourcesList(this, "data_sources", true);
  public get dataSources() {
    return this._dataSources;
  }
  public putDataSources(value: FederatedDatabaseInstanceStorageDatabasesCollectionsDataSources[] | cdktf.IResolvable) {
    this._dataSources.internalValue = value;
  }
  public resetDataSources() {
    this._dataSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourcesInput() {
    return this._dataSources.internalValue;
  }
}

export class FederatedDatabaseInstanceStorageDatabasesCollectionsList extends cdktf.ComplexList {
  public internalValue? : FederatedDatabaseInstanceStorageDatabasesCollections[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference {
    return new FederatedDatabaseInstanceStorageDatabasesCollectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FederatedDatabaseInstanceStorageDatabasesViews {
}

export function federatedDatabaseInstanceStorageDatabasesViewsToTerraform(struct?: FederatedDatabaseInstanceStorageDatabasesViews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class FederatedDatabaseInstanceStorageDatabasesViewsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FederatedDatabaseInstanceStorageDatabasesViews | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedDatabaseInstanceStorageDatabasesViews | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pipeline - computed: true, optional: false, required: false
  public get pipeline() {
    return this.getStringAttribute('pipeline');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }
}

export class FederatedDatabaseInstanceStorageDatabasesViewsList extends cdktf.ComplexList {
  public internalValue? : FederatedDatabaseInstanceStorageDatabasesViews[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FederatedDatabaseInstanceStorageDatabasesViewsOutputReference {
    return new FederatedDatabaseInstanceStorageDatabasesViewsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FederatedDatabaseInstanceStorageDatabases {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#name FederatedDatabaseInstance#name}
  */
  readonly name?: string;
  /**
  * collections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#collections FederatedDatabaseInstance#collections}
  */
  readonly collections?: FederatedDatabaseInstanceStorageDatabasesCollections[] | cdktf.IResolvable;
  /**
  * views block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#views FederatedDatabaseInstance#views}
  */
  readonly views?: FederatedDatabaseInstanceStorageDatabasesViews[] | cdktf.IResolvable;
}

export function federatedDatabaseInstanceStorageDatabasesToTerraform(struct?: FederatedDatabaseInstanceStorageDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    collections: cdktf.listMapper(federatedDatabaseInstanceStorageDatabasesCollectionsToTerraform, true)(struct!.collections),
    views: cdktf.listMapper(federatedDatabaseInstanceStorageDatabasesViewsToTerraform, true)(struct!.views),
  }
}

export class FederatedDatabaseInstanceStorageDatabasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FederatedDatabaseInstanceStorageDatabases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._collections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collections = this._collections?.internalValue;
    }
    if (this._views?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.views = this._views?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedDatabaseInstanceStorageDatabases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._collections.internalValue = undefined;
      this._views.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._collections.internalValue = value.collections;
      this._views.internalValue = value.views;
    }
  }

  // max_wildcard_collections - computed: true, optional: false, required: false
  public get maxWildcardCollections() {
    return this.getNumberAttribute('max_wildcard_collections');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // collections - computed: false, optional: true, required: false
  private _collections = new FederatedDatabaseInstanceStorageDatabasesCollectionsList(this, "collections", true);
  public get collections() {
    return this._collections;
  }
  public putCollections(value: FederatedDatabaseInstanceStorageDatabasesCollections[] | cdktf.IResolvable) {
    this._collections.internalValue = value;
  }
  public resetCollections() {
    this._collections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionsInput() {
    return this._collections.internalValue;
  }

  // views - computed: false, optional: true, required: false
  private _views = new FederatedDatabaseInstanceStorageDatabasesViewsList(this, "views", true);
  public get views() {
    return this._views;
  }
  public putViews(value: FederatedDatabaseInstanceStorageDatabasesViews[] | cdktf.IResolvable) {
    this._views.internalValue = value;
  }
  public resetViews() {
    this._views.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewsInput() {
    return this._views.internalValue;
  }
}

export class FederatedDatabaseInstanceStorageDatabasesList extends cdktf.ComplexList {
  public internalValue? : FederatedDatabaseInstanceStorageDatabases[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FederatedDatabaseInstanceStorageDatabasesOutputReference {
    return new FederatedDatabaseInstanceStorageDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#name FederatedDatabaseInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#value FederatedDatabaseInstance#value}
  */
  readonly value?: string;
}

export function federatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsToTerraform(struct?: FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList extends cdktf.ComplexList {
  public internalValue? : FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference {
    return new FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FederatedDatabaseInstanceStorageStoresReadPreferenceTagSets {
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#tags FederatedDatabaseInstance#tags}
  */
  readonly tags: FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags[] | cdktf.IResolvable;
}

export function federatedDatabaseInstanceStorageStoresReadPreferenceTagSetsToTerraform(struct?: FederatedDatabaseInstanceStorageStoresReadPreferenceTagSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.listMapper(federatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsToTerraform, true)(struct!.tags),
  }
}

export class FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FederatedDatabaseInstanceStorageStoresReadPreferenceTagSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedDatabaseInstanceStorageStoresReadPreferenceTagSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tags.internalValue = value.tags;
    }
  }

  // tags - computed: false, optional: false, required: true
  private _tags = new FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList extends cdktf.ComplexList {
  public internalValue? : FederatedDatabaseInstanceStorageStoresReadPreferenceTagSets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference {
    return new FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FederatedDatabaseInstanceStorageStoresReadPreference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#max_staleness_seconds FederatedDatabaseInstance#max_staleness_seconds}
  */
  readonly maxStalenessSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#mode FederatedDatabaseInstance#mode}
  */
  readonly mode?: string;
  /**
  * tag_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#tag_sets FederatedDatabaseInstance#tag_sets}
  */
  readonly tagSets?: FederatedDatabaseInstanceStorageStoresReadPreferenceTagSets[] | cdktf.IResolvable;
}

export function federatedDatabaseInstanceStorageStoresReadPreferenceToTerraform(struct?: FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference | FederatedDatabaseInstanceStorageStoresReadPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_staleness_seconds: cdktf.numberToTerraform(struct!.maxStalenessSeconds),
    mode: cdktf.stringToTerraform(struct!.mode),
    tag_sets: cdktf.listMapper(federatedDatabaseInstanceStorageStoresReadPreferenceTagSetsToTerraform, true)(struct!.tagSets),
  }
}

export class FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FederatedDatabaseInstanceStorageStoresReadPreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxStalenessSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStalenessSeconds = this._maxStalenessSeconds;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._tagSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagSets = this._tagSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedDatabaseInstanceStorageStoresReadPreference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxStalenessSeconds = undefined;
      this._mode = undefined;
      this._tagSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxStalenessSeconds = value.maxStalenessSeconds;
      this._mode = value.mode;
      this._tagSets.internalValue = value.tagSets;
    }
  }

  // max_staleness_seconds - computed: false, optional: true, required: false
  private _maxStalenessSeconds?: number; 
  public get maxStalenessSeconds() {
    return this.getNumberAttribute('max_staleness_seconds');
  }
  public set maxStalenessSeconds(value: number) {
    this._maxStalenessSeconds = value;
  }
  public resetMaxStalenessSeconds() {
    this._maxStalenessSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStalenessSecondsInput() {
    return this._maxStalenessSeconds;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // tag_sets - computed: false, optional: true, required: false
  private _tagSets = new FederatedDatabaseInstanceStorageStoresReadPreferenceTagSetsList(this, "tag_sets", false);
  public get tagSets() {
    return this._tagSets;
  }
  public putTagSets(value: FederatedDatabaseInstanceStorageStoresReadPreferenceTagSets[] | cdktf.IResolvable) {
    this._tagSets.internalValue = value;
  }
  public resetTagSets() {
    this._tagSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSetsInput() {
    return this._tagSets.internalValue;
  }
}
export interface FederatedDatabaseInstanceStorageStores {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#additional_storage_classes FederatedDatabaseInstance#additional_storage_classes}
  */
  readonly additionalStorageClasses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#allow_insecure FederatedDatabaseInstance#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#bucket FederatedDatabaseInstance#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#cluster_id FederatedDatabaseInstance#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#cluster_name FederatedDatabaseInstance#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#default_format FederatedDatabaseInstance#default_format}
  */
  readonly defaultFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#delimiter FederatedDatabaseInstance#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#include_tags FederatedDatabaseInstance#include_tags}
  */
  readonly includeTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#name FederatedDatabaseInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#prefix FederatedDatabaseInstance#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#project_id FederatedDatabaseInstance#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#provider FederatedDatabaseInstance#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#public FederatedDatabaseInstance#public}
  */
  readonly public?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#region FederatedDatabaseInstance#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#urls FederatedDatabaseInstance#urls}
  */
  readonly urls?: string[];
  /**
  * read_preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#read_preference FederatedDatabaseInstance#read_preference}
  */
  readonly readPreference?: FederatedDatabaseInstanceStorageStoresReadPreference;
}

export function federatedDatabaseInstanceStorageStoresToTerraform(struct?: FederatedDatabaseInstanceStorageStores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_storage_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalStorageClasses),
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    default_format: cdktf.stringToTerraform(struct!.defaultFormat),
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    include_tags: cdktf.booleanToTerraform(struct!.includeTags),
    name: cdktf.stringToTerraform(struct!.name),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    provider: cdktf.stringToTerraform(struct!.provider),
    public: cdktf.stringToTerraform(struct!.public),
    region: cdktf.stringToTerraform(struct!.region),
    urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.urls),
    read_preference: federatedDatabaseInstanceStorageStoresReadPreferenceToTerraform(struct!.readPreference),
  }
}

export class FederatedDatabaseInstanceStorageStoresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FederatedDatabaseInstanceStorageStores | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalStorageClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalStorageClasses = this._additionalStorageClasses;
    }
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._defaultFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultFormat = this._defaultFormat;
    }
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._includeTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTags = this._includeTags;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._public !== undefined) {
      hasAnyValues = true;
      internalValueResult.public = this._public;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._urls !== undefined) {
      hasAnyValues = true;
      internalValueResult.urls = this._urls;
    }
    if (this._readPreference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readPreference = this._readPreference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedDatabaseInstanceStorageStores | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalStorageClasses = undefined;
      this._allowInsecure = undefined;
      this._bucket = undefined;
      this._clusterId = undefined;
      this._clusterName = undefined;
      this._defaultFormat = undefined;
      this._delimiter = undefined;
      this._includeTags = undefined;
      this._name = undefined;
      this._prefix = undefined;
      this._projectId = undefined;
      this._provider = undefined;
      this._public = undefined;
      this._region = undefined;
      this._urls = undefined;
      this._readPreference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalStorageClasses = value.additionalStorageClasses;
      this._allowInsecure = value.allowInsecure;
      this._bucket = value.bucket;
      this._clusterId = value.clusterId;
      this._clusterName = value.clusterName;
      this._defaultFormat = value.defaultFormat;
      this._delimiter = value.delimiter;
      this._includeTags = value.includeTags;
      this._name = value.name;
      this._prefix = value.prefix;
      this._projectId = value.projectId;
      this._provider = value.provider;
      this._public = value.public;
      this._region = value.region;
      this._urls = value.urls;
      this._readPreference.internalValue = value.readPreference;
    }
  }

  // additional_storage_classes - computed: false, optional: true, required: false
  private _additionalStorageClasses?: string[]; 
  public get additionalStorageClasses() {
    return this.getListAttribute('additional_storage_classes');
  }
  public set additionalStorageClasses(value: string[]) {
    this._additionalStorageClasses = value;
  }
  public resetAdditionalStorageClasses() {
    this._additionalStorageClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalStorageClassesInput() {
    return this._additionalStorageClasses;
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // default_format - computed: false, optional: true, required: false
  private _defaultFormat?: string; 
  public get defaultFormat() {
    return this.getStringAttribute('default_format');
  }
  public set defaultFormat(value: string) {
    this._defaultFormat = value;
  }
  public resetDefaultFormat() {
    this._defaultFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFormatInput() {
    return this._defaultFormat;
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // include_tags - computed: false, optional: true, required: false
  private _includeTags?: boolean | cdktf.IResolvable; 
  public get includeTags() {
    return this.getBooleanAttribute('include_tags');
  }
  public set includeTags(value: boolean | cdktf.IResolvable) {
    this._includeTags = value;
  }
  public resetIncludeTags() {
    this._includeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTagsInput() {
    return this._includeTags;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // public - computed: false, optional: true, required: false
  private _public?: string; 
  public get public() {
    return this.getStringAttribute('public');
  }
  public set public(value: string) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // urls - computed: false, optional: true, required: false
  private _urls?: string[]; 
  public get urls() {
    return this.getListAttribute('urls');
  }
  public set urls(value: string[]) {
    this._urls = value;
  }
  public resetUrls() {
    this._urls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
  }

  // read_preference - computed: false, optional: true, required: false
  private _readPreference = new FederatedDatabaseInstanceStorageStoresReadPreferenceOutputReference(this, "read_preference");
  public get readPreference() {
    return this._readPreference;
  }
  public putReadPreference(value: FederatedDatabaseInstanceStorageStoresReadPreference) {
    this._readPreference.internalValue = value;
  }
  public resetReadPreference() {
    this._readPreference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readPreferenceInput() {
    return this._readPreference.internalValue;
  }
}

export class FederatedDatabaseInstanceStorageStoresList extends cdktf.ComplexList {
  public internalValue? : FederatedDatabaseInstanceStorageStores[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FederatedDatabaseInstanceStorageStoresOutputReference {
    return new FederatedDatabaseInstanceStorageStoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance mongodbatlas_federated_database_instance}
*/
export class FederatedDatabaseInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_federated_database_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FederatedDatabaseInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FederatedDatabaseInstance to import
  * @param importFromId The id of the existing FederatedDatabaseInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FederatedDatabaseInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_federated_database_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_database_instance mongodbatlas_federated_database_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FederatedDatabaseInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: FederatedDatabaseInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_federated_database_instance',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.12.1',
        providerVersionConstraint: '~> 1.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._projectId = config.projectId;
    this._cloudProviderConfig.internalValue = config.cloudProviderConfig;
    this._dataProcessRegion.internalValue = config.dataProcessRegion;
    this._storageDatabases.internalValue = config.storageDatabases;
    this._storageStores.internalValue = config.storageStores;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hostnames - computed: true, optional: false, required: false
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // cloud_provider_config - computed: false, optional: true, required: false
  private _cloudProviderConfig = new FederatedDatabaseInstanceCloudProviderConfigOutputReference(this, "cloud_provider_config");
  public get cloudProviderConfig() {
    return this._cloudProviderConfig;
  }
  public putCloudProviderConfig(value: FederatedDatabaseInstanceCloudProviderConfig) {
    this._cloudProviderConfig.internalValue = value;
  }
  public resetCloudProviderConfig() {
    this._cloudProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderConfigInput() {
    return this._cloudProviderConfig.internalValue;
  }

  // data_process_region - computed: false, optional: true, required: false
  private _dataProcessRegion = new FederatedDatabaseInstanceDataProcessRegionOutputReference(this, "data_process_region");
  public get dataProcessRegion() {
    return this._dataProcessRegion;
  }
  public putDataProcessRegion(value: FederatedDatabaseInstanceDataProcessRegion) {
    this._dataProcessRegion.internalValue = value;
  }
  public resetDataProcessRegion() {
    this._dataProcessRegion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProcessRegionInput() {
    return this._dataProcessRegion.internalValue;
  }

  // storage_databases - computed: false, optional: true, required: false
  private _storageDatabases = new FederatedDatabaseInstanceStorageDatabasesList(this, "storage_databases", true);
  public get storageDatabases() {
    return this._storageDatabases;
  }
  public putStorageDatabases(value: FederatedDatabaseInstanceStorageDatabases[] | cdktf.IResolvable) {
    this._storageDatabases.internalValue = value;
  }
  public resetStorageDatabases() {
    this._storageDatabases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDatabasesInput() {
    return this._storageDatabases.internalValue;
  }

  // storage_stores - computed: false, optional: true, required: false
  private _storageStores = new FederatedDatabaseInstanceStorageStoresList(this, "storage_stores", true);
  public get storageStores() {
    return this._storageStores;
  }
  public putStorageStores(value: FederatedDatabaseInstanceStorageStores[] | cdktf.IResolvable) {
    this._storageStores.internalValue = value;
  }
  public resetStorageStores() {
    this._storageStores.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageStoresInput() {
    return this._storageStores.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      cloud_provider_config: federatedDatabaseInstanceCloudProviderConfigToTerraform(this._cloudProviderConfig.internalValue),
      data_process_region: federatedDatabaseInstanceDataProcessRegionToTerraform(this._dataProcessRegion.internalValue),
      storage_databases: cdktf.listMapper(federatedDatabaseInstanceStorageDatabasesToTerraform, true)(this._storageDatabases.internalValue),
      storage_stores: cdktf.listMapper(federatedDatabaseInstanceStorageStoresToTerraform, true)(this._storageStores.internalValue),
    };
  }
}
