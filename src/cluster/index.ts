/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Submit this field alongside your topology reconfiguration to request a new regional outage resistant topology
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#accept_data_risks_and_force_replica_set_reconfig Cluster#accept_data_risks_and_force_replica_set_reconfig}
  */
  readonly acceptDataRisksAndForceReplicaSetReconfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#auto_scaling_compute_enabled Cluster#auto_scaling_compute_enabled}
  */
  readonly autoScalingComputeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#auto_scaling_compute_scale_down_enabled Cluster#auto_scaling_compute_scale_down_enabled}
  */
  readonly autoScalingComputeScaleDownEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#auto_scaling_disk_gb_enabled Cluster#auto_scaling_disk_gb_enabled}
  */
  readonly autoScalingDiskGbEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#backing_provider_name Cluster#backing_provider_name}
  */
  readonly backingProviderName?: string;
  /**
  * Clusters running MongoDB FCV 4.2 or later and any new Atlas clusters of any type do not support this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#backup_enabled Cluster#backup_enabled}
  */
  readonly backupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#cloud_backup Cluster#cloud_backup}
  */
  readonly cloudBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#cluster_type Cluster#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#disk_size_gb Cluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#encryption_at_rest_provider Cluster#encryption_at_rest_provider}
  */
  readonly encryptionAtRestProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#id Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#mongo_db_major_version Cluster#mongo_db_major_version}
  */
  readonly mongoDbMajorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#num_shards Cluster#num_shards}
  */
  readonly numShards?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#paused Cluster#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#pit_enabled Cluster#pit_enabled}
  */
  readonly pitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#project_id Cluster#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#provider_auto_scaling_compute_max_instance_size Cluster#provider_auto_scaling_compute_max_instance_size}
  */
  readonly providerAutoScalingComputeMaxInstanceSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#provider_auto_scaling_compute_min_instance_size Cluster#provider_auto_scaling_compute_min_instance_size}
  */
  readonly providerAutoScalingComputeMinInstanceSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#provider_disk_iops Cluster#provider_disk_iops}
  */
  readonly providerDiskIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#provider_disk_type_name Cluster#provider_disk_type_name}
  */
  readonly providerDiskTypeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#provider_encrypt_ebs_volume Cluster#provider_encrypt_ebs_volume}
  */
  readonly providerEncryptEbsVolume?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#provider_instance_size_name Cluster#provider_instance_size_name}
  */
  readonly providerInstanceSizeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#provider_name Cluster#provider_name}
  */
  readonly providerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#provider_region_name Cluster#provider_region_name}
  */
  readonly providerRegionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#provider_volume_type Cluster#provider_volume_type}
  */
  readonly providerVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#replication_factor Cluster#replication_factor}
  */
  readonly replicationFactor?: number;
  /**
  * Flag that indicates whether to retain backup snapshots for the deleted dedicated cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#retain_backups_enabled Cluster#retain_backups_enabled}
  */
  readonly retainBackupsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#termination_protection_enabled Cluster#termination_protection_enabled}
  */
  readonly terminationProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#version_release_system Cluster#version_release_system}
  */
  readonly versionReleaseSystem?: string;
  /**
  * advanced_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#advanced_configuration Cluster#advanced_configuration}
  */
  readonly advancedConfiguration?: ClusterAdvancedConfiguration;
  /**
  * bi_connector_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#bi_connector_config Cluster#bi_connector_config}
  */
  readonly biConnectorConfig?: ClusterBiConnectorConfig;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#labels Cluster#labels}
  */
  readonly labels?: ClusterLabels[] | cdktf.IResolvable;
  /**
  * replication_specs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#replication_specs Cluster#replication_specs}
  */
  readonly replicationSpecs?: ClusterReplicationSpecs[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#tags Cluster#tags}
  */
  readonly tags?: ClusterTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#timeouts Cluster#timeouts}
  */
  readonly timeouts?: ClusterTimeouts;
}
export interface ClusterConnectionStringsPrivateEndpointEndpoints {
}

export function clusterConnectionStringsPrivateEndpointEndpointsToTerraform(struct?: ClusterConnectionStringsPrivateEndpointEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterConnectionStringsPrivateEndpointEndpointsToHclTerraform(struct?: ClusterConnectionStringsPrivateEndpointEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterConnectionStringsPrivateEndpointEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterConnectionStringsPrivateEndpointEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterConnectionStringsPrivateEndpointEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class ClusterConnectionStringsPrivateEndpointEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): ClusterConnectionStringsPrivateEndpointEndpointsOutputReference {
    return new ClusterConnectionStringsPrivateEndpointEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterConnectionStringsPrivateEndpoint {
}

export function clusterConnectionStringsPrivateEndpointToTerraform(struct?: ClusterConnectionStringsPrivateEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterConnectionStringsPrivateEndpointToHclTerraform(struct?: ClusterConnectionStringsPrivateEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterConnectionStringsPrivateEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterConnectionStringsPrivateEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterConnectionStringsPrivateEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new ClusterConnectionStringsPrivateEndpointEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // srv_connection_string - computed: true, optional: false, required: false
  public get srvConnectionString() {
    return this.getStringAttribute('srv_connection_string');
  }

  // srv_shard_optimized_connection_string - computed: true, optional: false, required: false
  public get srvShardOptimizedConnectionString() {
    return this.getStringAttribute('srv_shard_optimized_connection_string');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class ClusterConnectionStringsPrivateEndpointList extends cdktf.ComplexList {

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
  public get(index: number): ClusterConnectionStringsPrivateEndpointOutputReference {
    return new ClusterConnectionStringsPrivateEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterConnectionStrings {
}

export function clusterConnectionStringsToTerraform(struct?: ClusterConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterConnectionStringsToHclTerraform(struct?: ClusterConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterConnectionStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterConnectionStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterConnectionStrings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // private - computed: true, optional: false, required: false
  public get private() {
    return this.getStringAttribute('private');
  }

  // private_endpoint - computed: true, optional: false, required: false
  private _privateEndpoint = new ClusterConnectionStringsPrivateEndpointList(this, "private_endpoint", false);
  public get privateEndpoint() {
    return this._privateEndpoint;
  }

  // private_srv - computed: true, optional: false, required: false
  public get privateSrv() {
    return this.getStringAttribute('private_srv');
  }

  // standard - computed: true, optional: false, required: false
  public get standard() {
    return this.getStringAttribute('standard');
  }

  // standard_srv - computed: true, optional: false, required: false
  public get standardSrv() {
    return this.getStringAttribute('standard_srv');
  }
}

export class ClusterConnectionStringsList extends cdktf.ComplexList {

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
  public get(index: number): ClusterConnectionStringsOutputReference {
    return new ClusterConnectionStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSnapshotBackupPolicyPoliciesPolicyItem {
}

export function clusterSnapshotBackupPolicyPoliciesPolicyItemToTerraform(struct?: ClusterSnapshotBackupPolicyPoliciesPolicyItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterSnapshotBackupPolicyPoliciesPolicyItemToHclTerraform(struct?: ClusterSnapshotBackupPolicyPoliciesPolicyItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSnapshotBackupPolicyPoliciesPolicyItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterSnapshotBackupPolicyPoliciesPolicyItem | undefined) {
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

export class ClusterSnapshotBackupPolicyPoliciesPolicyItemList extends cdktf.ComplexList {

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
  public get(index: number): ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference {
    return new ClusterSnapshotBackupPolicyPoliciesPolicyItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSnapshotBackupPolicyPolicies {
}

export function clusterSnapshotBackupPolicyPoliciesToTerraform(struct?: ClusterSnapshotBackupPolicyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterSnapshotBackupPolicyPoliciesToHclTerraform(struct?: ClusterSnapshotBackupPolicyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterSnapshotBackupPolicyPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSnapshotBackupPolicyPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterSnapshotBackupPolicyPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_item - computed: true, optional: false, required: false
  private _policyItem = new ClusterSnapshotBackupPolicyPoliciesPolicyItemList(this, "policy_item", false);
  public get policyItem() {
    return this._policyItem;
  }
}

export class ClusterSnapshotBackupPolicyPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): ClusterSnapshotBackupPolicyPoliciesOutputReference {
    return new ClusterSnapshotBackupPolicyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSnapshotBackupPolicy {
}

export function clusterSnapshotBackupPolicyToTerraform(struct?: ClusterSnapshotBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterSnapshotBackupPolicyToHclTerraform(struct?: ClusterSnapshotBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterSnapshotBackupPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSnapshotBackupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterSnapshotBackupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // next_snapshot - computed: true, optional: false, required: false
  public get nextSnapshot() {
    return this.getStringAttribute('next_snapshot');
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new ClusterSnapshotBackupPolicyPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // reference_hour_of_day - computed: true, optional: false, required: false
  public get referenceHourOfDay() {
    return this.getNumberAttribute('reference_hour_of_day');
  }

  // reference_minute_of_hour - computed: true, optional: false, required: false
  public get referenceMinuteOfHour() {
    return this.getNumberAttribute('reference_minute_of_hour');
  }

  // restore_window_days - computed: true, optional: false, required: false
  public get restoreWindowDays() {
    return this.getNumberAttribute('restore_window_days');
  }

  // update_snapshots - computed: true, optional: false, required: false
  public get updateSnapshots() {
    return this.getBooleanAttribute('update_snapshots');
  }
}

export class ClusterSnapshotBackupPolicyList extends cdktf.ComplexList {

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
  public get(index: number): ClusterSnapshotBackupPolicyOutputReference {
    return new ClusterSnapshotBackupPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAdvancedConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#default_read_concern Cluster#default_read_concern}
  */
  readonly defaultReadConcern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#default_write_concern Cluster#default_write_concern}
  */
  readonly defaultWriteConcern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#fail_index_key_too_long Cluster#fail_index_key_too_long}
  */
  readonly failIndexKeyTooLong?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#javascript_enabled Cluster#javascript_enabled}
  */
  readonly javascriptEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#minimum_enabled_tls_protocol Cluster#minimum_enabled_tls_protocol}
  */
  readonly minimumEnabledTlsProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#no_table_scan Cluster#no_table_scan}
  */
  readonly noTableScan?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#oplog_min_retention_hours Cluster#oplog_min_retention_hours}
  */
  readonly oplogMinRetentionHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#oplog_size_mb Cluster#oplog_size_mb}
  */
  readonly oplogSizeMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#sample_refresh_interval_bi_connector Cluster#sample_refresh_interval_bi_connector}
  */
  readonly sampleRefreshIntervalBiConnector?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#sample_size_bi_connector Cluster#sample_size_bi_connector}
  */
  readonly sampleSizeBiConnector?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#transaction_lifetime_limit_seconds Cluster#transaction_lifetime_limit_seconds}
  */
  readonly transactionLifetimeLimitSeconds?: number;
}

export function clusterAdvancedConfigurationToTerraform(struct?: ClusterAdvancedConfigurationOutputReference | ClusterAdvancedConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_read_concern: cdktf.stringToTerraform(struct!.defaultReadConcern),
    default_write_concern: cdktf.stringToTerraform(struct!.defaultWriteConcern),
    fail_index_key_too_long: cdktf.booleanToTerraform(struct!.failIndexKeyTooLong),
    javascript_enabled: cdktf.booleanToTerraform(struct!.javascriptEnabled),
    minimum_enabled_tls_protocol: cdktf.stringToTerraform(struct!.minimumEnabledTlsProtocol),
    no_table_scan: cdktf.booleanToTerraform(struct!.noTableScan),
    oplog_min_retention_hours: cdktf.numberToTerraform(struct!.oplogMinRetentionHours),
    oplog_size_mb: cdktf.numberToTerraform(struct!.oplogSizeMb),
    sample_refresh_interval_bi_connector: cdktf.numberToTerraform(struct!.sampleRefreshIntervalBiConnector),
    sample_size_bi_connector: cdktf.numberToTerraform(struct!.sampleSizeBiConnector),
    transaction_lifetime_limit_seconds: cdktf.numberToTerraform(struct!.transactionLifetimeLimitSeconds),
  }
}


export function clusterAdvancedConfigurationToHclTerraform(struct?: ClusterAdvancedConfigurationOutputReference | ClusterAdvancedConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_read_concern: {
      value: cdktf.stringToHclTerraform(struct!.defaultReadConcern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_write_concern: {
      value: cdktf.stringToHclTerraform(struct!.defaultWriteConcern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_index_key_too_long: {
      value: cdktf.booleanToHclTerraform(struct!.failIndexKeyTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    javascript_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.javascriptEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    minimum_enabled_tls_protocol: {
      value: cdktf.stringToHclTerraform(struct!.minimumEnabledTlsProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_table_scan: {
      value: cdktf.booleanToHclTerraform(struct!.noTableScan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oplog_min_retention_hours: {
      value: cdktf.numberToHclTerraform(struct!.oplogMinRetentionHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oplog_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.oplogSizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sample_refresh_interval_bi_connector: {
      value: cdktf.numberToHclTerraform(struct!.sampleRefreshIntervalBiConnector),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sample_size_bi_connector: {
      value: cdktf.numberToHclTerraform(struct!.sampleSizeBiConnector),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transaction_lifetime_limit_seconds: {
      value: cdktf.numberToHclTerraform(struct!.transactionLifetimeLimitSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAdvancedConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterAdvancedConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultReadConcern !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultReadConcern = this._defaultReadConcern;
    }
    if (this._defaultWriteConcern !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultWriteConcern = this._defaultWriteConcern;
    }
    if (this._failIndexKeyTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIndexKeyTooLong = this._failIndexKeyTooLong;
    }
    if (this._javascriptEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptEnabled = this._javascriptEnabled;
    }
    if (this._minimumEnabledTlsProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumEnabledTlsProtocol = this._minimumEnabledTlsProtocol;
    }
    if (this._noTableScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTableScan = this._noTableScan;
    }
    if (this._oplogMinRetentionHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.oplogMinRetentionHours = this._oplogMinRetentionHours;
    }
    if (this._oplogSizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.oplogSizeMb = this._oplogSizeMb;
    }
    if (this._sampleRefreshIntervalBiConnector !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRefreshIntervalBiConnector = this._sampleRefreshIntervalBiConnector;
    }
    if (this._sampleSizeBiConnector !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleSizeBiConnector = this._sampleSizeBiConnector;
    }
    if (this._transactionLifetimeLimitSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionLifetimeLimitSeconds = this._transactionLifetimeLimitSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAdvancedConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultReadConcern = undefined;
      this._defaultWriteConcern = undefined;
      this._failIndexKeyTooLong = undefined;
      this._javascriptEnabled = undefined;
      this._minimumEnabledTlsProtocol = undefined;
      this._noTableScan = undefined;
      this._oplogMinRetentionHours = undefined;
      this._oplogSizeMb = undefined;
      this._sampleRefreshIntervalBiConnector = undefined;
      this._sampleSizeBiConnector = undefined;
      this._transactionLifetimeLimitSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultReadConcern = value.defaultReadConcern;
      this._defaultWriteConcern = value.defaultWriteConcern;
      this._failIndexKeyTooLong = value.failIndexKeyTooLong;
      this._javascriptEnabled = value.javascriptEnabled;
      this._minimumEnabledTlsProtocol = value.minimumEnabledTlsProtocol;
      this._noTableScan = value.noTableScan;
      this._oplogMinRetentionHours = value.oplogMinRetentionHours;
      this._oplogSizeMb = value.oplogSizeMb;
      this._sampleRefreshIntervalBiConnector = value.sampleRefreshIntervalBiConnector;
      this._sampleSizeBiConnector = value.sampleSizeBiConnector;
      this._transactionLifetimeLimitSeconds = value.transactionLifetimeLimitSeconds;
    }
  }

  // default_read_concern - computed: true, optional: true, required: false
  private _defaultReadConcern?: string; 
  public get defaultReadConcern() {
    return this.getStringAttribute('default_read_concern');
  }
  public set defaultReadConcern(value: string) {
    this._defaultReadConcern = value;
  }
  public resetDefaultReadConcern() {
    this._defaultReadConcern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultReadConcernInput() {
    return this._defaultReadConcern;
  }

  // default_write_concern - computed: true, optional: true, required: false
  private _defaultWriteConcern?: string; 
  public get defaultWriteConcern() {
    return this.getStringAttribute('default_write_concern');
  }
  public set defaultWriteConcern(value: string) {
    this._defaultWriteConcern = value;
  }
  public resetDefaultWriteConcern() {
    this._defaultWriteConcern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultWriteConcernInput() {
    return this._defaultWriteConcern;
  }

  // fail_index_key_too_long - computed: true, optional: true, required: false
  private _failIndexKeyTooLong?: boolean | cdktf.IResolvable; 
  public get failIndexKeyTooLong() {
    return this.getBooleanAttribute('fail_index_key_too_long');
  }
  public set failIndexKeyTooLong(value: boolean | cdktf.IResolvable) {
    this._failIndexKeyTooLong = value;
  }
  public resetFailIndexKeyTooLong() {
    this._failIndexKeyTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIndexKeyTooLongInput() {
    return this._failIndexKeyTooLong;
  }

  // javascript_enabled - computed: true, optional: true, required: false
  private _javascriptEnabled?: boolean | cdktf.IResolvable; 
  public get javascriptEnabled() {
    return this.getBooleanAttribute('javascript_enabled');
  }
  public set javascriptEnabled(value: boolean | cdktf.IResolvable) {
    this._javascriptEnabled = value;
  }
  public resetJavascriptEnabled() {
    this._javascriptEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptEnabledInput() {
    return this._javascriptEnabled;
  }

  // minimum_enabled_tls_protocol - computed: true, optional: true, required: false
  private _minimumEnabledTlsProtocol?: string; 
  public get minimumEnabledTlsProtocol() {
    return this.getStringAttribute('minimum_enabled_tls_protocol');
  }
  public set minimumEnabledTlsProtocol(value: string) {
    this._minimumEnabledTlsProtocol = value;
  }
  public resetMinimumEnabledTlsProtocol() {
    this._minimumEnabledTlsProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumEnabledTlsProtocolInput() {
    return this._minimumEnabledTlsProtocol;
  }

  // no_table_scan - computed: true, optional: true, required: false
  private _noTableScan?: boolean | cdktf.IResolvable; 
  public get noTableScan() {
    return this.getBooleanAttribute('no_table_scan');
  }
  public set noTableScan(value: boolean | cdktf.IResolvable) {
    this._noTableScan = value;
  }
  public resetNoTableScan() {
    this._noTableScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTableScanInput() {
    return this._noTableScan;
  }

  // oplog_min_retention_hours - computed: false, optional: true, required: false
  private _oplogMinRetentionHours?: number; 
  public get oplogMinRetentionHours() {
    return this.getNumberAttribute('oplog_min_retention_hours');
  }
  public set oplogMinRetentionHours(value: number) {
    this._oplogMinRetentionHours = value;
  }
  public resetOplogMinRetentionHours() {
    this._oplogMinRetentionHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oplogMinRetentionHoursInput() {
    return this._oplogMinRetentionHours;
  }

  // oplog_size_mb - computed: true, optional: true, required: false
  private _oplogSizeMb?: number; 
  public get oplogSizeMb() {
    return this.getNumberAttribute('oplog_size_mb');
  }
  public set oplogSizeMb(value: number) {
    this._oplogSizeMb = value;
  }
  public resetOplogSizeMb() {
    this._oplogSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oplogSizeMbInput() {
    return this._oplogSizeMb;
  }

  // sample_refresh_interval_bi_connector - computed: true, optional: true, required: false
  private _sampleRefreshIntervalBiConnector?: number; 
  public get sampleRefreshIntervalBiConnector() {
    return this.getNumberAttribute('sample_refresh_interval_bi_connector');
  }
  public set sampleRefreshIntervalBiConnector(value: number) {
    this._sampleRefreshIntervalBiConnector = value;
  }
  public resetSampleRefreshIntervalBiConnector() {
    this._sampleRefreshIntervalBiConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRefreshIntervalBiConnectorInput() {
    return this._sampleRefreshIntervalBiConnector;
  }

  // sample_size_bi_connector - computed: true, optional: true, required: false
  private _sampleSizeBiConnector?: number; 
  public get sampleSizeBiConnector() {
    return this.getNumberAttribute('sample_size_bi_connector');
  }
  public set sampleSizeBiConnector(value: number) {
    this._sampleSizeBiConnector = value;
  }
  public resetSampleSizeBiConnector() {
    this._sampleSizeBiConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleSizeBiConnectorInput() {
    return this._sampleSizeBiConnector;
  }

  // transaction_lifetime_limit_seconds - computed: true, optional: true, required: false
  private _transactionLifetimeLimitSeconds?: number; 
  public get transactionLifetimeLimitSeconds() {
    return this.getNumberAttribute('transaction_lifetime_limit_seconds');
  }
  public set transactionLifetimeLimitSeconds(value: number) {
    this._transactionLifetimeLimitSeconds = value;
  }
  public resetTransactionLifetimeLimitSeconds() {
    this._transactionLifetimeLimitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionLifetimeLimitSecondsInput() {
    return this._transactionLifetimeLimitSeconds;
  }
}
export interface ClusterBiConnectorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#enabled Cluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#read_preference Cluster#read_preference}
  */
  readonly readPreference?: string;
}

export function clusterBiConnectorConfigToTerraform(struct?: ClusterBiConnectorConfigOutputReference | ClusterBiConnectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    read_preference: cdktf.stringToTerraform(struct!.readPreference),
  }
}


export function clusterBiConnectorConfigToHclTerraform(struct?: ClusterBiConnectorConfigOutputReference | ClusterBiConnectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_preference: {
      value: cdktf.stringToHclTerraform(struct!.readPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterBiConnectorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterBiConnectorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._readPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.readPreference = this._readPreference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterBiConnectorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._readPreference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._readPreference = value.readPreference;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // read_preference - computed: true, optional: true, required: false
  private _readPreference?: string; 
  public get readPreference() {
    return this.getStringAttribute('read_preference');
  }
  public set readPreference(value: string) {
    this._readPreference = value;
  }
  public resetReadPreference() {
    this._readPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readPreferenceInput() {
    return this._readPreference;
  }
}
export interface ClusterLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#key Cluster#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#value Cluster#value}
  */
  readonly value?: string;
}

export function clusterLabelsToTerraform(struct?: ClusterLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterLabelsToHclTerraform(struct?: ClusterLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class ClusterLabelsList extends cdktf.ComplexList {
  public internalValue? : ClusterLabels[] | cdktf.IResolvable

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
  public get(index: number): ClusterLabelsOutputReference {
    return new ClusterLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterReplicationSpecsRegionsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#analytics_nodes Cluster#analytics_nodes}
  */
  readonly analyticsNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#electable_nodes Cluster#electable_nodes}
  */
  readonly electableNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#priority Cluster#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#read_only_nodes Cluster#read_only_nodes}
  */
  readonly readOnlyNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#region_name Cluster#region_name}
  */
  readonly regionName: string;
}

export function clusterReplicationSpecsRegionsConfigToTerraform(struct?: ClusterReplicationSpecsRegionsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analytics_nodes: cdktf.numberToTerraform(struct!.analyticsNodes),
    electable_nodes: cdktf.numberToTerraform(struct!.electableNodes),
    priority: cdktf.numberToTerraform(struct!.priority),
    read_only_nodes: cdktf.numberToTerraform(struct!.readOnlyNodes),
    region_name: cdktf.stringToTerraform(struct!.regionName),
  }
}


export function clusterReplicationSpecsRegionsConfigToHclTerraform(struct?: ClusterReplicationSpecsRegionsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    analytics_nodes: {
      value: cdktf.numberToHclTerraform(struct!.analyticsNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    electable_nodes: {
      value: cdktf.numberToHclTerraform(struct!.electableNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_only_nodes: {
      value: cdktf.numberToHclTerraform(struct!.readOnlyNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_name: {
      value: cdktf.stringToHclTerraform(struct!.regionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterReplicationSpecsRegionsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterReplicationSpecsRegionsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyticsNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyticsNodes = this._analyticsNodes;
    }
    if (this._electableNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.electableNodes = this._electableNodes;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._readOnlyNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyNodes = this._readOnlyNodes;
    }
    if (this._regionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionName = this._regionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterReplicationSpecsRegionsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyticsNodes = undefined;
      this._electableNodes = undefined;
      this._priority = undefined;
      this._readOnlyNodes = undefined;
      this._regionName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyticsNodes = value.analyticsNodes;
      this._electableNodes = value.electableNodes;
      this._priority = value.priority;
      this._readOnlyNodes = value.readOnlyNodes;
      this._regionName = value.regionName;
    }
  }

  // analytics_nodes - computed: false, optional: true, required: false
  private _analyticsNodes?: number; 
  public get analyticsNodes() {
    return this.getNumberAttribute('analytics_nodes');
  }
  public set analyticsNodes(value: number) {
    this._analyticsNodes = value;
  }
  public resetAnalyticsNodes() {
    this._analyticsNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsNodesInput() {
    return this._analyticsNodes;
  }

  // electable_nodes - computed: true, optional: true, required: false
  private _electableNodes?: number; 
  public get electableNodes() {
    return this.getNumberAttribute('electable_nodes');
  }
  public set electableNodes(value: number) {
    this._electableNodes = value;
  }
  public resetElectableNodes() {
    this._electableNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electableNodesInput() {
    return this._electableNodes;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // read_only_nodes - computed: false, optional: true, required: false
  private _readOnlyNodes?: number; 
  public get readOnlyNodes() {
    return this.getNumberAttribute('read_only_nodes');
  }
  public set readOnlyNodes(value: number) {
    this._readOnlyNodes = value;
  }
  public resetReadOnlyNodes() {
    this._readOnlyNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyNodesInput() {
    return this._readOnlyNodes;
  }

  // region_name - computed: false, optional: false, required: true
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }
}

export class ClusterReplicationSpecsRegionsConfigList extends cdktf.ComplexList {
  public internalValue? : ClusterReplicationSpecsRegionsConfig[] | cdktf.IResolvable

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
  public get(index: number): ClusterReplicationSpecsRegionsConfigOutputReference {
    return new ClusterReplicationSpecsRegionsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterReplicationSpecs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#id Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#num_shards Cluster#num_shards}
  */
  readonly numShards: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#zone_name Cluster#zone_name}
  */
  readonly zoneName?: string;
  /**
  * regions_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#regions_config Cluster#regions_config}
  */
  readonly regionsConfig?: ClusterReplicationSpecsRegionsConfig[] | cdktf.IResolvable;
}

export function clusterReplicationSpecsToTerraform(struct?: ClusterReplicationSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    num_shards: cdktf.numberToTerraform(struct!.numShards),
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
    regions_config: cdktf.listMapper(clusterReplicationSpecsRegionsConfigToTerraform, true)(struct!.regionsConfig),
  }
}


export function clusterReplicationSpecsToHclTerraform(struct?: ClusterReplicationSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_shards: {
      value: cdktf.numberToHclTerraform(struct!.numShards),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_name: {
      value: cdktf.stringToHclTerraform(struct!.zoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regions_config: {
      value: cdktf.listMapperHcl(clusterReplicationSpecsRegionsConfigToHclTerraform, true)(struct!.regionsConfig),
      isBlock: true,
      type: "set",
      storageClassType: "ClusterReplicationSpecsRegionsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterReplicationSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterReplicationSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._numShards !== undefined) {
      hasAnyValues = true;
      internalValueResult.numShards = this._numShards;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    if (this._regionsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionsConfig = this._regionsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterReplicationSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._numShards = undefined;
      this._zoneName = undefined;
      this._regionsConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._numShards = value.numShards;
      this._zoneName = value.zoneName;
      this._regionsConfig.internalValue = value.regionsConfig;
    }
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

  // num_shards - computed: false, optional: false, required: true
  private _numShards?: number; 
  public get numShards() {
    return this.getNumberAttribute('num_shards');
  }
  public set numShards(value: number) {
    this._numShards = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numShardsInput() {
    return this._numShards;
  }

  // zone_name - computed: false, optional: true, required: false
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  public resetZoneName() {
    this._zoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // regions_config - computed: false, optional: true, required: false
  private _regionsConfig = new ClusterReplicationSpecsRegionsConfigList(this, "regions_config", true);
  public get regionsConfig() {
    return this._regionsConfig;
  }
  public putRegionsConfig(value: ClusterReplicationSpecsRegionsConfig[] | cdktf.IResolvable) {
    this._regionsConfig.internalValue = value;
  }
  public resetRegionsConfig() {
    this._regionsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsConfigInput() {
    return this._regionsConfig.internalValue;
  }
}

export class ClusterReplicationSpecsList extends cdktf.ComplexList {
  public internalValue? : ClusterReplicationSpecs[] | cdktf.IResolvable

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
  public get(index: number): ClusterReplicationSpecsOutputReference {
    return new ClusterReplicationSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#key Cluster#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#value Cluster#value}
  */
  readonly value: string;
}

export function clusterTagsToTerraform(struct?: ClusterTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterTagsToHclTerraform(struct?: ClusterTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterTagsList extends cdktf.ComplexList {
  public internalValue? : ClusterTags[] | cdktf.IResolvable

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
  public get(index: number): ClusterTagsOutputReference {
    return new ClusterTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#create Cluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#delete Cluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#update Cluster#update}
  */
  readonly update?: string;
}

export function clusterTimeoutsToTerraform(struct?: ClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function clusterTimeoutsToHclTerraform(struct?: ClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster mongodbatlas_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cluster to import
  * @param importFromId The id of the existing Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.3/docs/resources/cluster mongodbatlas_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_cluster',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.15.3',
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
    this._acceptDataRisksAndForceReplicaSetReconfig = config.acceptDataRisksAndForceReplicaSetReconfig;
    this._autoScalingComputeEnabled = config.autoScalingComputeEnabled;
    this._autoScalingComputeScaleDownEnabled = config.autoScalingComputeScaleDownEnabled;
    this._autoScalingDiskGbEnabled = config.autoScalingDiskGbEnabled;
    this._backingProviderName = config.backingProviderName;
    this._backupEnabled = config.backupEnabled;
    this._cloudBackup = config.cloudBackup;
    this._clusterType = config.clusterType;
    this._diskSizeGb = config.diskSizeGb;
    this._encryptionAtRestProvider = config.encryptionAtRestProvider;
    this._id = config.id;
    this._mongoDbMajorVersion = config.mongoDbMajorVersion;
    this._name = config.name;
    this._numShards = config.numShards;
    this._paused = config.paused;
    this._pitEnabled = config.pitEnabled;
    this._projectId = config.projectId;
    this._providerAutoScalingComputeMaxInstanceSize = config.providerAutoScalingComputeMaxInstanceSize;
    this._providerAutoScalingComputeMinInstanceSize = config.providerAutoScalingComputeMinInstanceSize;
    this._providerDiskIops = config.providerDiskIops;
    this._providerDiskTypeName = config.providerDiskTypeName;
    this._providerEncryptEbsVolume = config.providerEncryptEbsVolume;
    this._providerInstanceSizeName = config.providerInstanceSizeName;
    this._providerName = config.providerName;
    this._providerRegionName = config.providerRegionName;
    this._providerVolumeType = config.providerVolumeType;
    this._replicationFactor = config.replicationFactor;
    this._retainBackupsEnabled = config.retainBackupsEnabled;
    this._terminationProtectionEnabled = config.terminationProtectionEnabled;
    this._versionReleaseSystem = config.versionReleaseSystem;
    this._advancedConfiguration.internalValue = config.advancedConfiguration;
    this._biConnectorConfig.internalValue = config.biConnectorConfig;
    this._labels.internalValue = config.labels;
    this._replicationSpecs.internalValue = config.replicationSpecs;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_data_risks_and_force_replica_set_reconfig - computed: true, optional: true, required: false
  private _acceptDataRisksAndForceReplicaSetReconfig?: string; 
  public get acceptDataRisksAndForceReplicaSetReconfig() {
    return this.getStringAttribute('accept_data_risks_and_force_replica_set_reconfig');
  }
  public set acceptDataRisksAndForceReplicaSetReconfig(value: string) {
    this._acceptDataRisksAndForceReplicaSetReconfig = value;
  }
  public resetAcceptDataRisksAndForceReplicaSetReconfig() {
    this._acceptDataRisksAndForceReplicaSetReconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptDataRisksAndForceReplicaSetReconfigInput() {
    return this._acceptDataRisksAndForceReplicaSetReconfig;
  }

  // auto_scaling_compute_enabled - computed: true, optional: true, required: false
  private _autoScalingComputeEnabled?: boolean | cdktf.IResolvable; 
  public get autoScalingComputeEnabled() {
    return this.getBooleanAttribute('auto_scaling_compute_enabled');
  }
  public set autoScalingComputeEnabled(value: boolean | cdktf.IResolvable) {
    this._autoScalingComputeEnabled = value;
  }
  public resetAutoScalingComputeEnabled() {
    this._autoScalingComputeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingComputeEnabledInput() {
    return this._autoScalingComputeEnabled;
  }

  // auto_scaling_compute_scale_down_enabled - computed: true, optional: true, required: false
  private _autoScalingComputeScaleDownEnabled?: boolean | cdktf.IResolvable; 
  public get autoScalingComputeScaleDownEnabled() {
    return this.getBooleanAttribute('auto_scaling_compute_scale_down_enabled');
  }
  public set autoScalingComputeScaleDownEnabled(value: boolean | cdktf.IResolvable) {
    this._autoScalingComputeScaleDownEnabled = value;
  }
  public resetAutoScalingComputeScaleDownEnabled() {
    this._autoScalingComputeScaleDownEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingComputeScaleDownEnabledInput() {
    return this._autoScalingComputeScaleDownEnabled;
  }

  // auto_scaling_disk_gb_enabled - computed: true, optional: true, required: false
  private _autoScalingDiskGbEnabled?: boolean | cdktf.IResolvable; 
  public get autoScalingDiskGbEnabled() {
    return this.getBooleanAttribute('auto_scaling_disk_gb_enabled');
  }
  public set autoScalingDiskGbEnabled(value: boolean | cdktf.IResolvable) {
    this._autoScalingDiskGbEnabled = value;
  }
  public resetAutoScalingDiskGbEnabled() {
    this._autoScalingDiskGbEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingDiskGbEnabledInput() {
    return this._autoScalingDiskGbEnabled;
  }

  // backing_provider_name - computed: true, optional: true, required: false
  private _backingProviderName?: string; 
  public get backingProviderName() {
    return this.getStringAttribute('backing_provider_name');
  }
  public set backingProviderName(value: string) {
    this._backingProviderName = value;
  }
  public resetBackingProviderName() {
    this._backingProviderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backingProviderNameInput() {
    return this._backingProviderName;
  }

  // backup_enabled - computed: true, optional: true, required: false
  private _backupEnabled?: boolean | cdktf.IResolvable; 
  public get backupEnabled() {
    return this.getBooleanAttribute('backup_enabled');
  }
  public set backupEnabled(value: boolean | cdktf.IResolvable) {
    this._backupEnabled = value;
  }
  public resetBackupEnabled() {
    this._backupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupEnabledInput() {
    return this._backupEnabled;
  }

  // cloud_backup - computed: true, optional: true, required: false
  private _cloudBackup?: boolean | cdktf.IResolvable; 
  public get cloudBackup() {
    return this.getBooleanAttribute('cloud_backup');
  }
  public set cloudBackup(value: boolean | cdktf.IResolvable) {
    this._cloudBackup = value;
  }
  public resetCloudBackup() {
    this._cloudBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudBackupInput() {
    return this._cloudBackup;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_type - computed: true, optional: true, required: false
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // connection_strings - computed: true, optional: false, required: false
  private _connectionStrings = new ClusterConnectionStringsList(this, "connection_strings", false);
  public get connectionStrings() {
    return this._connectionStrings;
  }

  // container_id - computed: true, optional: false, required: false
  public get containerId() {
    return this.getStringAttribute('container_id');
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // encryption_at_rest_provider - computed: true, optional: true, required: false
  private _encryptionAtRestProvider?: string; 
  public get encryptionAtRestProvider() {
    return this.getStringAttribute('encryption_at_rest_provider');
  }
  public set encryptionAtRestProvider(value: string) {
    this._encryptionAtRestProvider = value;
  }
  public resetEncryptionAtRestProvider() {
    this._encryptionAtRestProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtRestProviderInput() {
    return this._encryptionAtRestProvider;
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

  // mongo_db_major_version - computed: true, optional: true, required: false
  private _mongoDbMajorVersion?: string; 
  public get mongoDbMajorVersion() {
    return this.getStringAttribute('mongo_db_major_version');
  }
  public set mongoDbMajorVersion(value: string) {
    this._mongoDbMajorVersion = value;
  }
  public resetMongoDbMajorVersion() {
    this._mongoDbMajorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongoDbMajorVersionInput() {
    return this._mongoDbMajorVersion;
  }

  // mongo_db_version - computed: true, optional: false, required: false
  public get mongoDbVersion() {
    return this.getStringAttribute('mongo_db_version');
  }

  // mongo_uri - computed: true, optional: false, required: false
  public get mongoUri() {
    return this.getStringAttribute('mongo_uri');
  }

  // mongo_uri_updated - computed: true, optional: false, required: false
  public get mongoUriUpdated() {
    return this.getStringAttribute('mongo_uri_updated');
  }

  // mongo_uri_with_options - computed: true, optional: false, required: false
  public get mongoUriWithOptions() {
    return this.getStringAttribute('mongo_uri_with_options');
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

  // num_shards - computed: true, optional: true, required: false
  private _numShards?: number; 
  public get numShards() {
    return this.getNumberAttribute('num_shards');
  }
  public set numShards(value: number) {
    this._numShards = value;
  }
  public resetNumShards() {
    this._numShards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numShardsInput() {
    return this._numShards;
  }

  // paused - computed: true, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // pit_enabled - computed: true, optional: true, required: false
  private _pitEnabled?: boolean | cdktf.IResolvable; 
  public get pitEnabled() {
    return this.getBooleanAttribute('pit_enabled');
  }
  public set pitEnabled(value: boolean | cdktf.IResolvable) {
    this._pitEnabled = value;
  }
  public resetPitEnabled() {
    this._pitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pitEnabledInput() {
    return this._pitEnabled;
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

  // provider_auto_scaling_compute_max_instance_size - computed: true, optional: true, required: false
  private _providerAutoScalingComputeMaxInstanceSize?: string; 
  public get providerAutoScalingComputeMaxInstanceSize() {
    return this.getStringAttribute('provider_auto_scaling_compute_max_instance_size');
  }
  public set providerAutoScalingComputeMaxInstanceSize(value: string) {
    this._providerAutoScalingComputeMaxInstanceSize = value;
  }
  public resetProviderAutoScalingComputeMaxInstanceSize() {
    this._providerAutoScalingComputeMaxInstanceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerAutoScalingComputeMaxInstanceSizeInput() {
    return this._providerAutoScalingComputeMaxInstanceSize;
  }

  // provider_auto_scaling_compute_min_instance_size - computed: true, optional: true, required: false
  private _providerAutoScalingComputeMinInstanceSize?: string; 
  public get providerAutoScalingComputeMinInstanceSize() {
    return this.getStringAttribute('provider_auto_scaling_compute_min_instance_size');
  }
  public set providerAutoScalingComputeMinInstanceSize(value: string) {
    this._providerAutoScalingComputeMinInstanceSize = value;
  }
  public resetProviderAutoScalingComputeMinInstanceSize() {
    this._providerAutoScalingComputeMinInstanceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerAutoScalingComputeMinInstanceSizeInput() {
    return this._providerAutoScalingComputeMinInstanceSize;
  }

  // provider_disk_iops - computed: true, optional: true, required: false
  private _providerDiskIops?: number; 
  public get providerDiskIops() {
    return this.getNumberAttribute('provider_disk_iops');
  }
  public set providerDiskIops(value: number) {
    this._providerDiskIops = value;
  }
  public resetProviderDiskIops() {
    this._providerDiskIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerDiskIopsInput() {
    return this._providerDiskIops;
  }

  // provider_disk_type_name - computed: true, optional: true, required: false
  private _providerDiskTypeName?: string; 
  public get providerDiskTypeName() {
    return this.getStringAttribute('provider_disk_type_name');
  }
  public set providerDiskTypeName(value: string) {
    this._providerDiskTypeName = value;
  }
  public resetProviderDiskTypeName() {
    this._providerDiskTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerDiskTypeNameInput() {
    return this._providerDiskTypeName;
  }

  // provider_encrypt_ebs_volume - computed: true, optional: true, required: false
  private _providerEncryptEbsVolume?: boolean | cdktf.IResolvable; 
  public get providerEncryptEbsVolume() {
    return this.getBooleanAttribute('provider_encrypt_ebs_volume');
  }
  public set providerEncryptEbsVolume(value: boolean | cdktf.IResolvable) {
    this._providerEncryptEbsVolume = value;
  }
  public resetProviderEncryptEbsVolume() {
    this._providerEncryptEbsVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerEncryptEbsVolumeInput() {
    return this._providerEncryptEbsVolume;
  }

  // provider_encrypt_ebs_volume_flag - computed: true, optional: false, required: false
  public get providerEncryptEbsVolumeFlag() {
    return this.getBooleanAttribute('provider_encrypt_ebs_volume_flag');
  }

  // provider_instance_size_name - computed: false, optional: false, required: true
  private _providerInstanceSizeName?: string; 
  public get providerInstanceSizeName() {
    return this.getStringAttribute('provider_instance_size_name');
  }
  public set providerInstanceSizeName(value: string) {
    this._providerInstanceSizeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInstanceSizeNameInput() {
    return this._providerInstanceSizeName;
  }

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // provider_region_name - computed: true, optional: true, required: false
  private _providerRegionName?: string; 
  public get providerRegionName() {
    return this.getStringAttribute('provider_region_name');
  }
  public set providerRegionName(value: string) {
    this._providerRegionName = value;
  }
  public resetProviderRegionName() {
    this._providerRegionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerRegionNameInput() {
    return this._providerRegionName;
  }

  // provider_volume_type - computed: true, optional: true, required: false
  private _providerVolumeType?: string; 
  public get providerVolumeType() {
    return this.getStringAttribute('provider_volume_type');
  }
  public set providerVolumeType(value: string) {
    this._providerVolumeType = value;
  }
  public resetProviderVolumeType() {
    this._providerVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerVolumeTypeInput() {
    return this._providerVolumeType;
  }

  // replication_factor - computed: true, optional: true, required: false
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  public resetReplicationFactor() {
    this._replicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
  }

  // retain_backups_enabled - computed: false, optional: true, required: false
  private _retainBackupsEnabled?: boolean | cdktf.IResolvable; 
  public get retainBackupsEnabled() {
    return this.getBooleanAttribute('retain_backups_enabled');
  }
  public set retainBackupsEnabled(value: boolean | cdktf.IResolvable) {
    this._retainBackupsEnabled = value;
  }
  public resetRetainBackupsEnabled() {
    this._retainBackupsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainBackupsEnabledInput() {
    return this._retainBackupsEnabled;
  }

  // snapshot_backup_policy - computed: true, optional: false, required: false
  private _snapshotBackupPolicy = new ClusterSnapshotBackupPolicyList(this, "snapshot_backup_policy", false);
  public get snapshotBackupPolicy() {
    return this._snapshotBackupPolicy;
  }

  // srv_address - computed: true, optional: false, required: false
  public get srvAddress() {
    return this.getStringAttribute('srv_address');
  }

  // state_name - computed: true, optional: false, required: false
  public get stateName() {
    return this.getStringAttribute('state_name');
  }

  // termination_protection_enabled - computed: true, optional: true, required: false
  private _terminationProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get terminationProtectionEnabled() {
    return this.getBooleanAttribute('termination_protection_enabled');
  }
  public set terminationProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._terminationProtectionEnabled = value;
  }
  public resetTerminationProtectionEnabled() {
    this._terminationProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationProtectionEnabledInput() {
    return this._terminationProtectionEnabled;
  }

  // version_release_system - computed: true, optional: true, required: false
  private _versionReleaseSystem?: string; 
  public get versionReleaseSystem() {
    return this.getStringAttribute('version_release_system');
  }
  public set versionReleaseSystem(value: string) {
    this._versionReleaseSystem = value;
  }
  public resetVersionReleaseSystem() {
    this._versionReleaseSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionReleaseSystemInput() {
    return this._versionReleaseSystem;
  }

  // advanced_configuration - computed: false, optional: true, required: false
  private _advancedConfiguration = new ClusterAdvancedConfigurationOutputReference(this, "advanced_configuration");
  public get advancedConfiguration() {
    return this._advancedConfiguration;
  }
  public putAdvancedConfiguration(value: ClusterAdvancedConfiguration) {
    this._advancedConfiguration.internalValue = value;
  }
  public resetAdvancedConfiguration() {
    this._advancedConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedConfigurationInput() {
    return this._advancedConfiguration.internalValue;
  }

  // bi_connector_config - computed: false, optional: true, required: false
  private _biConnectorConfig = new ClusterBiConnectorConfigOutputReference(this, "bi_connector_config");
  public get biConnectorConfig() {
    return this._biConnectorConfig;
  }
  public putBiConnectorConfig(value: ClusterBiConnectorConfig) {
    this._biConnectorConfig.internalValue = value;
  }
  public resetBiConnectorConfig() {
    this._biConnectorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biConnectorConfigInput() {
    return this._biConnectorConfig.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new ClusterLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: ClusterLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // replication_specs - computed: false, optional: true, required: false
  private _replicationSpecs = new ClusterReplicationSpecsList(this, "replication_specs", true);
  public get replicationSpecs() {
    return this._replicationSpecs;
  }
  public putReplicationSpecs(value: ClusterReplicationSpecs[] | cdktf.IResolvable) {
    this._replicationSpecs.internalValue = value;
  }
  public resetReplicationSpecs() {
    this._replicationSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSpecsInput() {
    return this._replicationSpecs.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new ClusterTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ClusterTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_data_risks_and_force_replica_set_reconfig: cdktf.stringToTerraform(this._acceptDataRisksAndForceReplicaSetReconfig),
      auto_scaling_compute_enabled: cdktf.booleanToTerraform(this._autoScalingComputeEnabled),
      auto_scaling_compute_scale_down_enabled: cdktf.booleanToTerraform(this._autoScalingComputeScaleDownEnabled),
      auto_scaling_disk_gb_enabled: cdktf.booleanToTerraform(this._autoScalingDiskGbEnabled),
      backing_provider_name: cdktf.stringToTerraform(this._backingProviderName),
      backup_enabled: cdktf.booleanToTerraform(this._backupEnabled),
      cloud_backup: cdktf.booleanToTerraform(this._cloudBackup),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      disk_size_gb: cdktf.numberToTerraform(this._diskSizeGb),
      encryption_at_rest_provider: cdktf.stringToTerraform(this._encryptionAtRestProvider),
      id: cdktf.stringToTerraform(this._id),
      mongo_db_major_version: cdktf.stringToTerraform(this._mongoDbMajorVersion),
      name: cdktf.stringToTerraform(this._name),
      num_shards: cdktf.numberToTerraform(this._numShards),
      paused: cdktf.booleanToTerraform(this._paused),
      pit_enabled: cdktf.booleanToTerraform(this._pitEnabled),
      project_id: cdktf.stringToTerraform(this._projectId),
      provider_auto_scaling_compute_max_instance_size: cdktf.stringToTerraform(this._providerAutoScalingComputeMaxInstanceSize),
      provider_auto_scaling_compute_min_instance_size: cdktf.stringToTerraform(this._providerAutoScalingComputeMinInstanceSize),
      provider_disk_iops: cdktf.numberToTerraform(this._providerDiskIops),
      provider_disk_type_name: cdktf.stringToTerraform(this._providerDiskTypeName),
      provider_encrypt_ebs_volume: cdktf.booleanToTerraform(this._providerEncryptEbsVolume),
      provider_instance_size_name: cdktf.stringToTerraform(this._providerInstanceSizeName),
      provider_name: cdktf.stringToTerraform(this._providerName),
      provider_region_name: cdktf.stringToTerraform(this._providerRegionName),
      provider_volume_type: cdktf.stringToTerraform(this._providerVolumeType),
      replication_factor: cdktf.numberToTerraform(this._replicationFactor),
      retain_backups_enabled: cdktf.booleanToTerraform(this._retainBackupsEnabled),
      termination_protection_enabled: cdktf.booleanToTerraform(this._terminationProtectionEnabled),
      version_release_system: cdktf.stringToTerraform(this._versionReleaseSystem),
      advanced_configuration: clusterAdvancedConfigurationToTerraform(this._advancedConfiguration.internalValue),
      bi_connector_config: clusterBiConnectorConfigToTerraform(this._biConnectorConfig.internalValue),
      labels: cdktf.listMapper(clusterLabelsToTerraform, true)(this._labels.internalValue),
      replication_specs: cdktf.listMapper(clusterReplicationSpecsToTerraform, true)(this._replicationSpecs.internalValue),
      tags: cdktf.listMapper(clusterTagsToTerraform, true)(this._tags.internalValue),
      timeouts: clusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_data_risks_and_force_replica_set_reconfig: {
        value: cdktf.stringToHclTerraform(this._acceptDataRisksAndForceReplicaSetReconfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_scaling_compute_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoScalingComputeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_scaling_compute_scale_down_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoScalingComputeScaleDownEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_scaling_disk_gb_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoScalingDiskGbEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backing_provider_name: {
        value: cdktf.stringToHclTerraform(this._backingProviderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_enabled: {
        value: cdktf.booleanToHclTerraform(this._backupEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloud_backup: {
        value: cdktf.booleanToHclTerraform(this._cloudBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_size_gb: {
        value: cdktf.numberToHclTerraform(this._diskSizeGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encryption_at_rest_provider: {
        value: cdktf.stringToHclTerraform(this._encryptionAtRestProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mongo_db_major_version: {
        value: cdktf.stringToHclTerraform(this._mongoDbMajorVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_shards: {
        value: cdktf.numberToHclTerraform(this._numShards),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pit_enabled: {
        value: cdktf.booleanToHclTerraform(this._pitEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_auto_scaling_compute_max_instance_size: {
        value: cdktf.stringToHclTerraform(this._providerAutoScalingComputeMaxInstanceSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_auto_scaling_compute_min_instance_size: {
        value: cdktf.stringToHclTerraform(this._providerAutoScalingComputeMinInstanceSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_disk_iops: {
        value: cdktf.numberToHclTerraform(this._providerDiskIops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provider_disk_type_name: {
        value: cdktf.stringToHclTerraform(this._providerDiskTypeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_encrypt_ebs_volume: {
        value: cdktf.booleanToHclTerraform(this._providerEncryptEbsVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      provider_instance_size_name: {
        value: cdktf.stringToHclTerraform(this._providerInstanceSizeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_name: {
        value: cdktf.stringToHclTerraform(this._providerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_region_name: {
        value: cdktf.stringToHclTerraform(this._providerRegionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_volume_type: {
        value: cdktf.stringToHclTerraform(this._providerVolumeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_factor: {
        value: cdktf.numberToHclTerraform(this._replicationFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retain_backups_enabled: {
        value: cdktf.booleanToHclTerraform(this._retainBackupsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      termination_protection_enabled: {
        value: cdktf.booleanToHclTerraform(this._terminationProtectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version_release_system: {
        value: cdktf.stringToHclTerraform(this._versionReleaseSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_configuration: {
        value: clusterAdvancedConfigurationToHclTerraform(this._advancedConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterAdvancedConfigurationList",
      },
      bi_connector_config: {
        value: clusterBiConnectorConfigToHclTerraform(this._biConnectorConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterBiConnectorConfigList",
      },
      labels: {
        value: cdktf.listMapperHcl(clusterLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClusterLabelsList",
      },
      replication_specs: {
        value: cdktf.listMapperHcl(clusterReplicationSpecsToHclTerraform, true)(this._replicationSpecs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClusterReplicationSpecsList",
      },
      tags: {
        value: cdktf.listMapperHcl(clusterTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClusterTagsList",
      },
      timeouts: {
        value: clusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
