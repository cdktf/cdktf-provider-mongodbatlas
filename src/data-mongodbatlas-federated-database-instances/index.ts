/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/federated_database_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasFederatedDatabaseInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/federated_database_instances#id DataMongodbatlasFederatedDatabaseInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/federated_database_instances#project_id DataMongodbatlasFederatedDatabaseInstances#project_id}
  */
  readonly projectId: string;
}
export interface DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws {
}

export function dataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsToTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsToHclTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getStringAttribute('role_id');
  }

  // test_s3_bucket - computed: true, optional: false, required: false
  public get testS3Bucket() {
    return this.getStringAttribute('test_s3_bucket');
  }
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference {
    return new DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAzure {
}

export function dataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAzureToTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAzureToHclTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // atlas_app_id - computed: true, optional: false, required: false
  public get atlasAppId() {
    return this.getStringAttribute('atlas_app_id');
  }

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getStringAttribute('role_id');
  }

  // service_principal_id - computed: true, optional: false, required: false
  public get servicePrincipalId() {
    return this.getStringAttribute('service_principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAzureList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAzureOutputReference {
    return new DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAzureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig {
}

export function dataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigToTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigToHclTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws - computed: true, optional: false, required: false
  private _aws = new DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList(this, "aws", false);
  public get aws() {
    return this._aws;
  }

  // azure - computed: true, optional: false, required: false
  private _azure = new DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAzureList(this, "azure", false);
  public get azure() {
    return this._azure;
  }
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference {
    return new DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion {
}

export function dataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionToTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionToHclTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference {
    return new DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources {
}

export function dataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesToTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesToHclTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_insecure - computed: true, optional: false, required: false
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }

  // collection - computed: true, optional: false, required: false
  public get collection() {
    return this.getStringAttribute('collection');
  }

  // collection_regex - computed: true, optional: false, required: false
  public get collectionRegex() {
    return this.getStringAttribute('collection_regex');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // database_regex - computed: true, optional: false, required: false
  public get databaseRegex() {
    return this.getStringAttribute('database_regex');
  }

  // dataset_name - computed: true, optional: false, required: false
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }

  // default_format - computed: true, optional: false, required: false
  public get defaultFormat() {
    return this.getStringAttribute('default_format');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // provenance_field_name - computed: true, optional: false, required: false
  public get provenanceFieldName() {
    return this.getStringAttribute('provenance_field_name');
  }

  // store_name - computed: true, optional: false, required: false
  public get storeName() {
    return this.getStringAttribute('store_name');
  }

  // urls - computed: true, optional: false, required: false
  public get urls() {
    return this.getListAttribute('urls');
  }
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference {
    return new DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections {
}

export function dataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsToTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsToHclTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_sources - computed: true, optional: false, required: false
  private _dataSources = new DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList(this, "data_sources", true);
  public get dataSources() {
    return this._dataSources;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference {
    return new DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews {
}

export function dataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsToTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsToHclTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

export class DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference {
    return new DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases {
}

export function dataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesToTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesToHclTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collections - computed: true, optional: false, required: false
  private _collections = new DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList(this, "collections", true);
  public get collections() {
    return this._collections;
  }

  // max_wildcard_collections - computed: true, optional: false, required: false
  public get maxWildcardCollections() {
    return this.getNumberAttribute('max_wildcard_collections');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // views - computed: true, optional: false, required: false
  private _views = new DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList(this, "views", true);
  public get views() {
    return this._views;
  }
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference {
    return new DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTags {
}

export function dataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsToTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsToHclTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference {
    return new DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSets {
}

export function dataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsToTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsToHclTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference {
    return new DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference {
}

export function dataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceToTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceToHclTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_staleness_seconds - computed: true, optional: false, required: false
  public get maxStalenessSeconds() {
    return this.getNumberAttribute('max_staleness_seconds');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // tag_sets - computed: true, optional: false, required: false
  private _tagSets = new DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList(this, "tag_sets", false);
  public get tagSets() {
    return this._tagSets;
  }
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference {
    return new DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores {
}

export function dataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresToTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresToHclTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_storage_classes - computed: true, optional: false, required: false
  public get additionalStorageClasses() {
    return this.getListAttribute('additional_storage_classes');
  }

  // allow_insecure - computed: true, optional: false, required: false
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // default_format - computed: true, optional: false, required: false
  public get defaultFormat() {
    return this.getStringAttribute('default_format');
  }

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }

  // include_tags - computed: true, optional: false, required: false
  public get includeTags() {
    return this.getBooleanAttribute('include_tags');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // public - computed: true, optional: false, required: false
  public get public() {
    return this.getStringAttribute('public');
  }

  // read_preference - computed: true, optional: false, required: false
  private _readPreference = new DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList(this, "read_preference", false);
  public get readPreference() {
    return this._readPreference;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // urls - computed: true, optional: false, required: false
  public get urls() {
    return this.getListAttribute('urls');
  }
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference {
    return new DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedDatabaseInstancesResults {
}

export function dataMongodbatlasFederatedDatabaseInstancesResultsToTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedDatabaseInstancesResultsToHclTerraform(struct?: DataMongodbatlasFederatedDatabaseInstancesResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasFederatedDatabaseInstancesResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedDatabaseInstancesResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_provider_config - computed: true, optional: false, required: false
  private _cloudProviderConfig = new DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList(this, "cloud_provider_config", false);
  public get cloudProviderConfig() {
    return this._cloudProviderConfig;
  }

  // data_process_region - computed: true, optional: false, required: false
  private _dataProcessRegion = new DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList(this, "data_process_region", false);
  public get dataProcessRegion() {
    return this._dataProcessRegion;
  }

  // hostnames - computed: true, optional: false, required: false
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_databases - computed: true, optional: false, required: false
  private _storageDatabases = new DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList(this, "storage_databases", true);
  public get storageDatabases() {
    return this._storageDatabases;
  }

  // storage_stores - computed: true, optional: false, required: false
  private _storageStores = new DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList(this, "storage_stores", true);
  public get storageStores() {
    return this._storageStores;
  }
}

export class DataMongodbatlasFederatedDatabaseInstancesResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference {
    return new DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/federated_database_instances mongodbatlas_federated_database_instances}
*/
export class DataMongodbatlasFederatedDatabaseInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_federated_database_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasFederatedDatabaseInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasFederatedDatabaseInstances to import
  * @param importFromId The id of the existing DataMongodbatlasFederatedDatabaseInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/federated_database_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasFederatedDatabaseInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_federated_database_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/federated_database_instances mongodbatlas_federated_database_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasFederatedDatabaseInstancesConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasFederatedDatabaseInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_federated_database_instances',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.41.1',
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
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // results - computed: true, optional: false, required: false
  private _results = new DataMongodbatlasFederatedDatabaseInstancesResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
