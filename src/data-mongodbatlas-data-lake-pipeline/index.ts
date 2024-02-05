/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/data_lake_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasDataLakePipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/data_lake_pipeline#name DataMongodbatlasDataLakePipeline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/data_lake_pipeline#project_id DataMongodbatlasDataLakePipeline#project_id}
  */
  readonly projectId: string;
}
export interface DataMongodbatlasDataLakePipelineIngestionSchedules {
}

export function dataMongodbatlasDataLakePipelineIngestionSchedulesToTerraform(struct?: DataMongodbatlasDataLakePipelineIngestionSchedules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasDataLakePipelineIngestionSchedulesToHclTerraform(struct?: DataMongodbatlasDataLakePipelineIngestionSchedules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasDataLakePipelineIngestionSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasDataLakePipelineIngestionSchedules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasDataLakePipelineIngestionSchedules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // frequency_interval - computed: true, optional: false, required: false
  public get frequencyInterval() {
    return this.getNumberAttribute('frequency_interval');
  }

  // frequency_type - computed: true, optional: false, required: false
  public get frequencyType() {
    return this.getStringAttribute('frequency_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // retention_unit - computed: true, optional: false, required: false
  public get retentionUnit() {
    return this.getStringAttribute('retention_unit');
  }

  // retention_value - computed: true, optional: false, required: false
  public get retentionValue() {
    return this.getNumberAttribute('retention_value');
  }
}

export class DataMongodbatlasDataLakePipelineIngestionSchedulesList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasDataLakePipelineIngestionSchedulesOutputReference {
    return new DataMongodbatlasDataLakePipelineIngestionSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasDataLakePipelineSinkPartitionFields {
}

export function dataMongodbatlasDataLakePipelineSinkPartitionFieldsToTerraform(struct?: DataMongodbatlasDataLakePipelineSinkPartitionFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasDataLakePipelineSinkPartitionFieldsToHclTerraform(struct?: DataMongodbatlasDataLakePipelineSinkPartitionFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasDataLakePipelineSinkPartitionFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasDataLakePipelineSinkPartitionFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasDataLakePipelineSinkPartitionFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }
}

export class DataMongodbatlasDataLakePipelineSinkPartitionFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasDataLakePipelineSinkPartitionFieldsOutputReference {
    return new DataMongodbatlasDataLakePipelineSinkPartitionFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasDataLakePipelineSink {
}

export function dataMongodbatlasDataLakePipelineSinkToTerraform(struct?: DataMongodbatlasDataLakePipelineSink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasDataLakePipelineSinkToHclTerraform(struct?: DataMongodbatlasDataLakePipelineSink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasDataLakePipelineSinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasDataLakePipelineSink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasDataLakePipelineSink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // partition_fields - computed: true, optional: false, required: false
  private _partitionFields = new DataMongodbatlasDataLakePipelineSinkPartitionFieldsList(this, "partition_fields", false);
  public get partitionFields() {
    return this._partitionFields;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMongodbatlasDataLakePipelineSinkList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasDataLakePipelineSinkOutputReference {
    return new DataMongodbatlasDataLakePipelineSinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasDataLakePipelineSnapshots {
}

export function dataMongodbatlasDataLakePipelineSnapshotsToTerraform(struct?: DataMongodbatlasDataLakePipelineSnapshots): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasDataLakePipelineSnapshotsToHclTerraform(struct?: DataMongodbatlasDataLakePipelineSnapshots): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasDataLakePipelineSnapshotsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasDataLakePipelineSnapshots | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasDataLakePipelineSnapshots | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // copy_region - computed: true, optional: false, required: false
  public get copyRegion() {
    return this.getStringAttribute('copy_region');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // frequency_yype - computed: true, optional: false, required: false
  public get frequencyYype() {
    return this.getStringAttribute('frequency_yype');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // master_key - computed: true, optional: false, required: false
  public get masterKey() {
    return this.getStringAttribute('master_key');
  }

  // mongod_version - computed: true, optional: false, required: false
  public get mongodVersion() {
    return this.getStringAttribute('mongod_version');
  }

  // policies - computed: true, optional: false, required: false
  public get policies() {
    return this.getListAttribute('policies');
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // replica_set_name - computed: true, optional: false, required: false
  public get replicaSetName() {
    return this.getStringAttribute('replica_set_name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMongodbatlasDataLakePipelineSnapshotsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasDataLakePipelineSnapshotsOutputReference {
    return new DataMongodbatlasDataLakePipelineSnapshotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasDataLakePipelineSource {
}

export function dataMongodbatlasDataLakePipelineSourceToTerraform(struct?: DataMongodbatlasDataLakePipelineSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasDataLakePipelineSourceToHclTerraform(struct?: DataMongodbatlasDataLakePipelineSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasDataLakePipelineSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasDataLakePipelineSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasDataLakePipelineSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // collection_name - computed: true, optional: false, required: false
  public get collectionName() {
    return this.getStringAttribute('collection_name');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMongodbatlasDataLakePipelineSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasDataLakePipelineSourceOutputReference {
    return new DataMongodbatlasDataLakePipelineSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasDataLakePipelineTransformations {
}

export function dataMongodbatlasDataLakePipelineTransformationsToTerraform(struct?: DataMongodbatlasDataLakePipelineTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasDataLakePipelineTransformationsToHclTerraform(struct?: DataMongodbatlasDataLakePipelineTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasDataLakePipelineTransformationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasDataLakePipelineTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasDataLakePipelineTransformations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMongodbatlasDataLakePipelineTransformationsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasDataLakePipelineTransformationsOutputReference {
    return new DataMongodbatlasDataLakePipelineTransformationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/data_lake_pipeline mongodbatlas_data_lake_pipeline}
*/
export class DataMongodbatlasDataLakePipeline extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_data_lake_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasDataLakePipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasDataLakePipeline to import
  * @param importFromId The id of the existing DataMongodbatlasDataLakePipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/data_lake_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasDataLakePipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_data_lake_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/data_lake_pipeline mongodbatlas_data_lake_pipeline} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasDataLakePipelineConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasDataLakePipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_data_lake_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.15.0',
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
    this._name = config.name;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingestion_schedules - computed: true, optional: false, required: false
  private _ingestionSchedules = new DataMongodbatlasDataLakePipelineIngestionSchedulesList(this, "ingestion_schedules", true);
  public get ingestionSchedules() {
    return this._ingestionSchedules;
  }

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
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

  // sink - computed: true, optional: false, required: false
  private _sink = new DataMongodbatlasDataLakePipelineSinkList(this, "sink", false);
  public get sink() {
    return this._sink;
  }

  // snapshots - computed: true, optional: false, required: false
  private _snapshots = new DataMongodbatlasDataLakePipelineSnapshotsList(this, "snapshots", true);
  public get snapshots() {
    return this._snapshots;
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataMongodbatlasDataLakePipelineSourceList(this, "source", false);
  public get source() {
    return this._source;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // transformations - computed: true, optional: false, required: false
  private _transformations = new DataMongodbatlasDataLakePipelineTransformationsList(this, "transformations", false);
  public get transformations() {
    return this._transformations;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
