/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdvancedClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Submit this field alongside your topology reconfiguration to request a new regional outage resistant topology
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#accept_data_risks_and_force_replica_set_reconfig AdvancedCluster#accept_data_risks_and_force_replica_set_reconfig}
  */
  readonly acceptDataRisksAndForceReplicaSetReconfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#backup_enabled AdvancedCluster#backup_enabled}
  */
  readonly backupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#cluster_type AdvancedCluster#cluster_type}
  */
  readonly clusterType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#config_server_management_mode AdvancedCluster#config_server_management_mode}
  */
  readonly configServerManagementMode?: string;
  /**
  * Flag that indicates whether to delete the cluster if the cluster creation times out. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#delete_on_create_timeout AdvancedCluster#delete_on_create_timeout}
  */
  readonly deleteOnCreateTimeout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#disk_size_gb AdvancedCluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#encryption_at_rest_provider AdvancedCluster#encryption_at_rest_provider}
  */
  readonly encryptionAtRestProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#global_cluster_self_managed_sharding AdvancedCluster#global_cluster_self_managed_sharding}
  */
  readonly globalClusterSelfManagedSharding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#id AdvancedCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#mongo_db_major_version AdvancedCluster#mongo_db_major_version}
  */
  readonly mongoDbMajorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#name AdvancedCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#paused AdvancedCluster#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#pit_enabled AdvancedCluster#pit_enabled}
  */
  readonly pitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#project_id AdvancedCluster#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#redact_client_log_data AdvancedCluster#redact_client_log_data}
  */
  readonly redactClientLogData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#replica_set_scaling_strategy AdvancedCluster#replica_set_scaling_strategy}
  */
  readonly replicaSetScalingStrategy?: string;
  /**
  * Flag that indicates whether to retain backup snapshots for the deleted dedicated cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#retain_backups_enabled AdvancedCluster#retain_backups_enabled}
  */
  readonly retainBackupsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#root_cert_type AdvancedCluster#root_cert_type}
  */
  readonly rootCertType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#termination_protection_enabled AdvancedCluster#termination_protection_enabled}
  */
  readonly terminationProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#version_release_system AdvancedCluster#version_release_system}
  */
  readonly versionReleaseSystem?: string;
  /**
  * advanced_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#advanced_configuration AdvancedCluster#advanced_configuration}
  */
  readonly advancedConfiguration?: AdvancedClusterAdvancedConfiguration;
  /**
  * bi_connector_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#bi_connector_config AdvancedCluster#bi_connector_config}
  */
  readonly biConnectorConfig?: AdvancedClusterBiConnectorConfig;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#labels AdvancedCluster#labels}
  */
  readonly labels?: AdvancedClusterLabels[] | cdktf.IResolvable;
  /**
  * pinned_fcv block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#pinned_fcv AdvancedCluster#pinned_fcv}
  */
  readonly pinnedFcv?: AdvancedClusterPinnedFcv;
  /**
  * replication_specs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#replication_specs AdvancedCluster#replication_specs}
  */
  readonly replicationSpecs: AdvancedClusterReplicationSpecs[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#tags AdvancedCluster#tags}
  */
  readonly tags?: AdvancedClusterTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#timeouts AdvancedCluster#timeouts}
  */
  readonly timeouts?: AdvancedClusterTimeouts;
}
export interface AdvancedClusterConnectionStringsPrivateEndpointEndpoints {
}

export function advancedClusterConnectionStringsPrivateEndpointEndpointsToTerraform(struct?: AdvancedClusterConnectionStringsPrivateEndpointEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function advancedClusterConnectionStringsPrivateEndpointEndpointsToHclTerraform(struct?: AdvancedClusterConnectionStringsPrivateEndpointEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdvancedClusterConnectionStringsPrivateEndpointEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterConnectionStringsPrivateEndpointEndpoints | undefined) {
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

export class AdvancedClusterConnectionStringsPrivateEndpointEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference {
    return new AdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdvancedClusterConnectionStringsPrivateEndpoint {
}

export function advancedClusterConnectionStringsPrivateEndpointToTerraform(struct?: AdvancedClusterConnectionStringsPrivateEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function advancedClusterConnectionStringsPrivateEndpointToHclTerraform(struct?: AdvancedClusterConnectionStringsPrivateEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AdvancedClusterConnectionStringsPrivateEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdvancedClusterConnectionStringsPrivateEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterConnectionStringsPrivateEndpoint | undefined) {
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
  private _endpoints = new AdvancedClusterConnectionStringsPrivateEndpointEndpointsList(this, "endpoints", false);
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

export class AdvancedClusterConnectionStringsPrivateEndpointList extends cdktf.ComplexList {

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
  public get(index: number): AdvancedClusterConnectionStringsPrivateEndpointOutputReference {
    return new AdvancedClusterConnectionStringsPrivateEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdvancedClusterConnectionStrings {
}

export function advancedClusterConnectionStringsToTerraform(struct?: AdvancedClusterConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function advancedClusterConnectionStringsToHclTerraform(struct?: AdvancedClusterConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AdvancedClusterConnectionStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdvancedClusterConnectionStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterConnectionStrings | undefined) {
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
  private _privateEndpoint = new AdvancedClusterConnectionStringsPrivateEndpointList(this, "private_endpoint", false);
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

export class AdvancedClusterConnectionStringsList extends cdktf.ComplexList {

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
  public get(index: number): AdvancedClusterConnectionStringsOutputReference {
    return new AdvancedClusterConnectionStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdvancedClusterAdvancedConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#change_stream_options_pre_and_post_images_expire_after_seconds AdvancedCluster#change_stream_options_pre_and_post_images_expire_after_seconds}
  */
  readonly changeStreamOptionsPreAndPostImagesExpireAfterSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#custom_openssl_cipher_config_tls12 AdvancedCluster#custom_openssl_cipher_config_tls12}
  */
  readonly customOpensslCipherConfigTls12?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#default_max_time_ms AdvancedCluster#default_max_time_ms}
  */
  readonly defaultMaxTimeMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#default_read_concern AdvancedCluster#default_read_concern}
  */
  readonly defaultReadConcern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#default_write_concern AdvancedCluster#default_write_concern}
  */
  readonly defaultWriteConcern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#fail_index_key_too_long AdvancedCluster#fail_index_key_too_long}
  */
  readonly failIndexKeyTooLong?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#javascript_enabled AdvancedCluster#javascript_enabled}
  */
  readonly javascriptEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#minimum_enabled_tls_protocol AdvancedCluster#minimum_enabled_tls_protocol}
  */
  readonly minimumEnabledTlsProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#no_table_scan AdvancedCluster#no_table_scan}
  */
  readonly noTableScan?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#oplog_min_retention_hours AdvancedCluster#oplog_min_retention_hours}
  */
  readonly oplogMinRetentionHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#oplog_size_mb AdvancedCluster#oplog_size_mb}
  */
  readonly oplogSizeMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#sample_refresh_interval_bi_connector AdvancedCluster#sample_refresh_interval_bi_connector}
  */
  readonly sampleRefreshIntervalBiConnector?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#sample_size_bi_connector AdvancedCluster#sample_size_bi_connector}
  */
  readonly sampleSizeBiConnector?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#tls_cipher_config_mode AdvancedCluster#tls_cipher_config_mode}
  */
  readonly tlsCipherConfigMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#transaction_lifetime_limit_seconds AdvancedCluster#transaction_lifetime_limit_seconds}
  */
  readonly transactionLifetimeLimitSeconds?: number;
}

export function advancedClusterAdvancedConfigurationToTerraform(struct?: AdvancedClusterAdvancedConfigurationOutputReference | AdvancedClusterAdvancedConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    change_stream_options_pre_and_post_images_expire_after_seconds: cdktf.numberToTerraform(struct!.changeStreamOptionsPreAndPostImagesExpireAfterSeconds),
    custom_openssl_cipher_config_tls12: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customOpensslCipherConfigTls12),
    default_max_time_ms: cdktf.numberToTerraform(struct!.defaultMaxTimeMs),
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
    tls_cipher_config_mode: cdktf.stringToTerraform(struct!.tlsCipherConfigMode),
    transaction_lifetime_limit_seconds: cdktf.numberToTerraform(struct!.transactionLifetimeLimitSeconds),
  }
}


export function advancedClusterAdvancedConfigurationToHclTerraform(struct?: AdvancedClusterAdvancedConfigurationOutputReference | AdvancedClusterAdvancedConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    change_stream_options_pre_and_post_images_expire_after_seconds: {
      value: cdktf.numberToHclTerraform(struct!.changeStreamOptionsPreAndPostImagesExpireAfterSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_openssl_cipher_config_tls12: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customOpensslCipherConfigTls12),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_max_time_ms: {
      value: cdktf.numberToHclTerraform(struct!.defaultMaxTimeMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
    tls_cipher_config_mode: {
      value: cdktf.stringToHclTerraform(struct!.tlsCipherConfigMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class AdvancedClusterAdvancedConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvancedClusterAdvancedConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changeStreamOptionsPreAndPostImagesExpireAfterSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeStreamOptionsPreAndPostImagesExpireAfterSeconds = this._changeStreamOptionsPreAndPostImagesExpireAfterSeconds;
    }
    if (this._customOpensslCipherConfigTls12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.customOpensslCipherConfigTls12 = this._customOpensslCipherConfigTls12;
    }
    if (this._defaultMaxTimeMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMaxTimeMs = this._defaultMaxTimeMs;
    }
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
    if (this._tlsCipherConfigMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCipherConfigMode = this._tlsCipherConfigMode;
    }
    if (this._transactionLifetimeLimitSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionLifetimeLimitSeconds = this._transactionLifetimeLimitSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterAdvancedConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._changeStreamOptionsPreAndPostImagesExpireAfterSeconds = undefined;
      this._customOpensslCipherConfigTls12 = undefined;
      this._defaultMaxTimeMs = undefined;
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
      this._tlsCipherConfigMode = undefined;
      this._transactionLifetimeLimitSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._changeStreamOptionsPreAndPostImagesExpireAfterSeconds = value.changeStreamOptionsPreAndPostImagesExpireAfterSeconds;
      this._customOpensslCipherConfigTls12 = value.customOpensslCipherConfigTls12;
      this._defaultMaxTimeMs = value.defaultMaxTimeMs;
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
      this._tlsCipherConfigMode = value.tlsCipherConfigMode;
      this._transactionLifetimeLimitSeconds = value.transactionLifetimeLimitSeconds;
    }
  }

  // change_stream_options_pre_and_post_images_expire_after_seconds - computed: false, optional: true, required: false
  private _changeStreamOptionsPreAndPostImagesExpireAfterSeconds?: number; 
  public get changeStreamOptionsPreAndPostImagesExpireAfterSeconds() {
    return this.getNumberAttribute('change_stream_options_pre_and_post_images_expire_after_seconds');
  }
  public set changeStreamOptionsPreAndPostImagesExpireAfterSeconds(value: number) {
    this._changeStreamOptionsPreAndPostImagesExpireAfterSeconds = value;
  }
  public resetChangeStreamOptionsPreAndPostImagesExpireAfterSeconds() {
    this._changeStreamOptionsPreAndPostImagesExpireAfterSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeStreamOptionsPreAndPostImagesExpireAfterSecondsInput() {
    return this._changeStreamOptionsPreAndPostImagesExpireAfterSeconds;
  }

  // custom_openssl_cipher_config_tls12 - computed: false, optional: true, required: false
  private _customOpensslCipherConfigTls12?: string[]; 
  public get customOpensslCipherConfigTls12() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_openssl_cipher_config_tls12'));
  }
  public set customOpensslCipherConfigTls12(value: string[]) {
    this._customOpensslCipherConfigTls12 = value;
  }
  public resetCustomOpensslCipherConfigTls12() {
    this._customOpensslCipherConfigTls12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOpensslCipherConfigTls12Input() {
    return this._customOpensslCipherConfigTls12;
  }

  // default_max_time_ms - computed: false, optional: true, required: false
  private _defaultMaxTimeMs?: number; 
  public get defaultMaxTimeMs() {
    return this.getNumberAttribute('default_max_time_ms');
  }
  public set defaultMaxTimeMs(value: number) {
    this._defaultMaxTimeMs = value;
  }
  public resetDefaultMaxTimeMs() {
    this._defaultMaxTimeMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMaxTimeMsInput() {
    return this._defaultMaxTimeMs;
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

  // tls_cipher_config_mode - computed: true, optional: true, required: false
  private _tlsCipherConfigMode?: string; 
  public get tlsCipherConfigMode() {
    return this.getStringAttribute('tls_cipher_config_mode');
  }
  public set tlsCipherConfigMode(value: string) {
    this._tlsCipherConfigMode = value;
  }
  public resetTlsCipherConfigMode() {
    this._tlsCipherConfigMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCipherConfigModeInput() {
    return this._tlsCipherConfigMode;
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
export interface AdvancedClusterBiConnectorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#enabled AdvancedCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#read_preference AdvancedCluster#read_preference}
  */
  readonly readPreference?: string;
}

export function advancedClusterBiConnectorConfigToTerraform(struct?: AdvancedClusterBiConnectorConfigOutputReference | AdvancedClusterBiConnectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    read_preference: cdktf.stringToTerraform(struct!.readPreference),
  }
}


export function advancedClusterBiConnectorConfigToHclTerraform(struct?: AdvancedClusterBiConnectorConfigOutputReference | AdvancedClusterBiConnectorConfig): any {
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

export class AdvancedClusterBiConnectorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvancedClusterBiConnectorConfig | undefined {
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

  public set internalValue(value: AdvancedClusterBiConnectorConfig | undefined) {
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
export interface AdvancedClusterLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#key AdvancedCluster#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#value AdvancedCluster#value}
  */
  readonly value?: string;
}

export function advancedClusterLabelsToTerraform(struct?: AdvancedClusterLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function advancedClusterLabelsToHclTerraform(struct?: AdvancedClusterLabels | cdktf.IResolvable): any {
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

export class AdvancedClusterLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdvancedClusterLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AdvancedClusterLabels | cdktf.IResolvable | undefined) {
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

export class AdvancedClusterLabelsList extends cdktf.ComplexList {
  public internalValue? : AdvancedClusterLabels[] | cdktf.IResolvable

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
  public get(index: number): AdvancedClusterLabelsOutputReference {
    return new AdvancedClusterLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdvancedClusterPinnedFcv {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#expiration_date AdvancedCluster#expiration_date}
  */
  readonly expirationDate: string;
}

export function advancedClusterPinnedFcvToTerraform(struct?: AdvancedClusterPinnedFcvOutputReference | AdvancedClusterPinnedFcv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_date: cdktf.stringToTerraform(struct!.expirationDate),
  }
}


export function advancedClusterPinnedFcvToHclTerraform(struct?: AdvancedClusterPinnedFcvOutputReference | AdvancedClusterPinnedFcv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_date: {
      value: cdktf.stringToHclTerraform(struct!.expirationDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvancedClusterPinnedFcvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvancedClusterPinnedFcv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationDate = this._expirationDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterPinnedFcv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expirationDate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expirationDate = value.expirationDate;
    }
  }

  // expiration_date - computed: false, optional: false, required: true
  private _expirationDate?: string; 
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }
  public set expirationDate(value: string) {
    this._expirationDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateInput() {
    return this._expirationDate;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#compute_enabled AdvancedCluster#compute_enabled}
  */
  readonly computeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#compute_max_instance_size AdvancedCluster#compute_max_instance_size}
  */
  readonly computeMaxInstanceSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#compute_min_instance_size AdvancedCluster#compute_min_instance_size}
  */
  readonly computeMinInstanceSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#compute_scale_down_enabled AdvancedCluster#compute_scale_down_enabled}
  */
  readonly computeScaleDownEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#disk_gb_enabled AdvancedCluster#disk_gb_enabled}
  */
  readonly diskGbEnabled?: boolean | cdktf.IResolvable;
}

export function advancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingToTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference | AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_enabled: cdktf.booleanToTerraform(struct!.computeEnabled),
    compute_max_instance_size: cdktf.stringToTerraform(struct!.computeMaxInstanceSize),
    compute_min_instance_size: cdktf.stringToTerraform(struct!.computeMinInstanceSize),
    compute_scale_down_enabled: cdktf.booleanToTerraform(struct!.computeScaleDownEnabled),
    disk_gb_enabled: cdktf.booleanToTerraform(struct!.diskGbEnabled),
  }
}


export function advancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingToHclTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference | AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.computeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compute_max_instance_size: {
      value: cdktf.stringToHclTerraform(struct!.computeMaxInstanceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_min_instance_size: {
      value: cdktf.stringToHclTerraform(struct!.computeMinInstanceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_scale_down_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.computeScaleDownEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_gb_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.diskGbEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeEnabled = this._computeEnabled;
    }
    if (this._computeMaxInstanceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeMaxInstanceSize = this._computeMaxInstanceSize;
    }
    if (this._computeMinInstanceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeMinInstanceSize = this._computeMinInstanceSize;
    }
    if (this._computeScaleDownEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeScaleDownEnabled = this._computeScaleDownEnabled;
    }
    if (this._diskGbEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskGbEnabled = this._diskGbEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeEnabled = undefined;
      this._computeMaxInstanceSize = undefined;
      this._computeMinInstanceSize = undefined;
      this._computeScaleDownEnabled = undefined;
      this._diskGbEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeEnabled = value.computeEnabled;
      this._computeMaxInstanceSize = value.computeMaxInstanceSize;
      this._computeMinInstanceSize = value.computeMinInstanceSize;
      this._computeScaleDownEnabled = value.computeScaleDownEnabled;
      this._diskGbEnabled = value.diskGbEnabled;
    }
  }

  // compute_enabled - computed: true, optional: true, required: false
  private _computeEnabled?: boolean | cdktf.IResolvable; 
  public get computeEnabled() {
    return this.getBooleanAttribute('compute_enabled');
  }
  public set computeEnabled(value: boolean | cdktf.IResolvable) {
    this._computeEnabled = value;
  }
  public resetComputeEnabled() {
    this._computeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeEnabledInput() {
    return this._computeEnabled;
  }

  // compute_max_instance_size - computed: true, optional: true, required: false
  private _computeMaxInstanceSize?: string; 
  public get computeMaxInstanceSize() {
    return this.getStringAttribute('compute_max_instance_size');
  }
  public set computeMaxInstanceSize(value: string) {
    this._computeMaxInstanceSize = value;
  }
  public resetComputeMaxInstanceSize() {
    this._computeMaxInstanceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeMaxInstanceSizeInput() {
    return this._computeMaxInstanceSize;
  }

  // compute_min_instance_size - computed: true, optional: true, required: false
  private _computeMinInstanceSize?: string; 
  public get computeMinInstanceSize() {
    return this.getStringAttribute('compute_min_instance_size');
  }
  public set computeMinInstanceSize(value: string) {
    this._computeMinInstanceSize = value;
  }
  public resetComputeMinInstanceSize() {
    this._computeMinInstanceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeMinInstanceSizeInput() {
    return this._computeMinInstanceSize;
  }

  // compute_scale_down_enabled - computed: true, optional: true, required: false
  private _computeScaleDownEnabled?: boolean | cdktf.IResolvable; 
  public get computeScaleDownEnabled() {
    return this.getBooleanAttribute('compute_scale_down_enabled');
  }
  public set computeScaleDownEnabled(value: boolean | cdktf.IResolvable) {
    this._computeScaleDownEnabled = value;
  }
  public resetComputeScaleDownEnabled() {
    this._computeScaleDownEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeScaleDownEnabledInput() {
    return this._computeScaleDownEnabled;
  }

  // disk_gb_enabled - computed: true, optional: true, required: false
  private _diskGbEnabled?: boolean | cdktf.IResolvable; 
  public get diskGbEnabled() {
    return this.getBooleanAttribute('disk_gb_enabled');
  }
  public set diskGbEnabled(value: boolean | cdktf.IResolvable) {
    this._diskGbEnabled = value;
  }
  public resetDiskGbEnabled() {
    this._diskGbEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskGbEnabledInput() {
    return this._diskGbEnabled;
  }
}
export interface AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#disk_iops AdvancedCluster#disk_iops}
  */
  readonly diskIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#disk_size_gb AdvancedCluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#ebs_volume_type AdvancedCluster#ebs_volume_type}
  */
  readonly ebsVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#instance_size AdvancedCluster#instance_size}
  */
  readonly instanceSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#node_count AdvancedCluster#node_count}
  */
  readonly nodeCount?: number;
}

export function advancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsToTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference | AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_iops: cdktf.numberToTerraform(struct!.diskIops),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    ebs_volume_type: cdktf.stringToTerraform(struct!.ebsVolumeType),
    instance_size: cdktf.stringToTerraform(struct!.instanceSize),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
  }
}


export function advancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsToHclTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference | AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_iops: {
      value: cdktf.numberToHclTerraform(struct!.diskIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.ebsVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_size: {
      value: cdktf.stringToHclTerraform(struct!.instanceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskIops = this._diskIops;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._ebsVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeType = this._ebsVolumeType;
    }
    if (this._instanceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSize = this._instanceSize;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskIops = undefined;
      this._diskSizeGb = undefined;
      this._ebsVolumeType = undefined;
      this._instanceSize = undefined;
      this._nodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskIops = value.diskIops;
      this._diskSizeGb = value.diskSizeGb;
      this._ebsVolumeType = value.ebsVolumeType;
      this._instanceSize = value.instanceSize;
      this._nodeCount = value.nodeCount;
    }
  }

  // disk_iops - computed: true, optional: true, required: false
  private _diskIops?: number; 
  public get diskIops() {
    return this.getNumberAttribute('disk_iops');
  }
  public set diskIops(value: number) {
    this._diskIops = value;
  }
  public resetDiskIops() {
    this._diskIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIopsInput() {
    return this._diskIops;
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

  // ebs_volume_type - computed: true, optional: true, required: false
  private _ebsVolumeType?: string; 
  public get ebsVolumeType() {
    return this.getStringAttribute('ebs_volume_type');
  }
  public set ebsVolumeType(value: string) {
    this._ebsVolumeType = value;
  }
  public resetEbsVolumeType() {
    this._ebsVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeTypeInput() {
    return this._ebsVolumeType;
  }

  // instance_size - computed: false, optional: false, required: true
  private _instanceSize?: string; 
  public get instanceSize() {
    return this.getStringAttribute('instance_size');
  }
  public set instanceSize(value: string) {
    this._instanceSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSizeInput() {
    return this._instanceSize;
  }

  // node_count - computed: false, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }
}
export interface AdvancedClusterReplicationSpecsRegionConfigsAutoScaling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#compute_enabled AdvancedCluster#compute_enabled}
  */
  readonly computeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#compute_max_instance_size AdvancedCluster#compute_max_instance_size}
  */
  readonly computeMaxInstanceSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#compute_min_instance_size AdvancedCluster#compute_min_instance_size}
  */
  readonly computeMinInstanceSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#compute_scale_down_enabled AdvancedCluster#compute_scale_down_enabled}
  */
  readonly computeScaleDownEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#disk_gb_enabled AdvancedCluster#disk_gb_enabled}
  */
  readonly diskGbEnabled?: boolean | cdktf.IResolvable;
}

export function advancedClusterReplicationSpecsRegionConfigsAutoScalingToTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference | AdvancedClusterReplicationSpecsRegionConfigsAutoScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_enabled: cdktf.booleanToTerraform(struct!.computeEnabled),
    compute_max_instance_size: cdktf.stringToTerraform(struct!.computeMaxInstanceSize),
    compute_min_instance_size: cdktf.stringToTerraform(struct!.computeMinInstanceSize),
    compute_scale_down_enabled: cdktf.booleanToTerraform(struct!.computeScaleDownEnabled),
    disk_gb_enabled: cdktf.booleanToTerraform(struct!.diskGbEnabled),
  }
}


export function advancedClusterReplicationSpecsRegionConfigsAutoScalingToHclTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference | AdvancedClusterReplicationSpecsRegionConfigsAutoScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.computeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compute_max_instance_size: {
      value: cdktf.stringToHclTerraform(struct!.computeMaxInstanceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_min_instance_size: {
      value: cdktf.stringToHclTerraform(struct!.computeMinInstanceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_scale_down_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.computeScaleDownEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_gb_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.diskGbEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvancedClusterReplicationSpecsRegionConfigsAutoScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeEnabled = this._computeEnabled;
    }
    if (this._computeMaxInstanceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeMaxInstanceSize = this._computeMaxInstanceSize;
    }
    if (this._computeMinInstanceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeMinInstanceSize = this._computeMinInstanceSize;
    }
    if (this._computeScaleDownEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeScaleDownEnabled = this._computeScaleDownEnabled;
    }
    if (this._diskGbEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskGbEnabled = this._diskGbEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterReplicationSpecsRegionConfigsAutoScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeEnabled = undefined;
      this._computeMaxInstanceSize = undefined;
      this._computeMinInstanceSize = undefined;
      this._computeScaleDownEnabled = undefined;
      this._diskGbEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeEnabled = value.computeEnabled;
      this._computeMaxInstanceSize = value.computeMaxInstanceSize;
      this._computeMinInstanceSize = value.computeMinInstanceSize;
      this._computeScaleDownEnabled = value.computeScaleDownEnabled;
      this._diskGbEnabled = value.diskGbEnabled;
    }
  }

  // compute_enabled - computed: true, optional: true, required: false
  private _computeEnabled?: boolean | cdktf.IResolvable; 
  public get computeEnabled() {
    return this.getBooleanAttribute('compute_enabled');
  }
  public set computeEnabled(value: boolean | cdktf.IResolvable) {
    this._computeEnabled = value;
  }
  public resetComputeEnabled() {
    this._computeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeEnabledInput() {
    return this._computeEnabled;
  }

  // compute_max_instance_size - computed: true, optional: true, required: false
  private _computeMaxInstanceSize?: string; 
  public get computeMaxInstanceSize() {
    return this.getStringAttribute('compute_max_instance_size');
  }
  public set computeMaxInstanceSize(value: string) {
    this._computeMaxInstanceSize = value;
  }
  public resetComputeMaxInstanceSize() {
    this._computeMaxInstanceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeMaxInstanceSizeInput() {
    return this._computeMaxInstanceSize;
  }

  // compute_min_instance_size - computed: true, optional: true, required: false
  private _computeMinInstanceSize?: string; 
  public get computeMinInstanceSize() {
    return this.getStringAttribute('compute_min_instance_size');
  }
  public set computeMinInstanceSize(value: string) {
    this._computeMinInstanceSize = value;
  }
  public resetComputeMinInstanceSize() {
    this._computeMinInstanceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeMinInstanceSizeInput() {
    return this._computeMinInstanceSize;
  }

  // compute_scale_down_enabled - computed: true, optional: true, required: false
  private _computeScaleDownEnabled?: boolean | cdktf.IResolvable; 
  public get computeScaleDownEnabled() {
    return this.getBooleanAttribute('compute_scale_down_enabled');
  }
  public set computeScaleDownEnabled(value: boolean | cdktf.IResolvable) {
    this._computeScaleDownEnabled = value;
  }
  public resetComputeScaleDownEnabled() {
    this._computeScaleDownEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeScaleDownEnabledInput() {
    return this._computeScaleDownEnabled;
  }

  // disk_gb_enabled - computed: true, optional: true, required: false
  private _diskGbEnabled?: boolean | cdktf.IResolvable; 
  public get diskGbEnabled() {
    return this.getBooleanAttribute('disk_gb_enabled');
  }
  public set diskGbEnabled(value: boolean | cdktf.IResolvable) {
    this._diskGbEnabled = value;
  }
  public resetDiskGbEnabled() {
    this._diskGbEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskGbEnabledInput() {
    return this._diskGbEnabled;
  }
}
export interface AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#disk_iops AdvancedCluster#disk_iops}
  */
  readonly diskIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#disk_size_gb AdvancedCluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#ebs_volume_type AdvancedCluster#ebs_volume_type}
  */
  readonly ebsVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#instance_size AdvancedCluster#instance_size}
  */
  readonly instanceSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#node_count AdvancedCluster#node_count}
  */
  readonly nodeCount?: number;
}

export function advancedClusterReplicationSpecsRegionConfigsElectableSpecsToTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference | AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_iops: cdktf.numberToTerraform(struct!.diskIops),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    ebs_volume_type: cdktf.stringToTerraform(struct!.ebsVolumeType),
    instance_size: cdktf.stringToTerraform(struct!.instanceSize),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
  }
}


export function advancedClusterReplicationSpecsRegionConfigsElectableSpecsToHclTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference | AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_iops: {
      value: cdktf.numberToHclTerraform(struct!.diskIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.ebsVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_size: {
      value: cdktf.stringToHclTerraform(struct!.instanceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskIops = this._diskIops;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._ebsVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeType = this._ebsVolumeType;
    }
    if (this._instanceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSize = this._instanceSize;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskIops = undefined;
      this._diskSizeGb = undefined;
      this._ebsVolumeType = undefined;
      this._instanceSize = undefined;
      this._nodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskIops = value.diskIops;
      this._diskSizeGb = value.diskSizeGb;
      this._ebsVolumeType = value.ebsVolumeType;
      this._instanceSize = value.instanceSize;
      this._nodeCount = value.nodeCount;
    }
  }

  // disk_iops - computed: true, optional: true, required: false
  private _diskIops?: number; 
  public get diskIops() {
    return this.getNumberAttribute('disk_iops');
  }
  public set diskIops(value: number) {
    this._diskIops = value;
  }
  public resetDiskIops() {
    this._diskIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIopsInput() {
    return this._diskIops;
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

  // ebs_volume_type - computed: true, optional: true, required: false
  private _ebsVolumeType?: string; 
  public get ebsVolumeType() {
    return this.getStringAttribute('ebs_volume_type');
  }
  public set ebsVolumeType(value: string) {
    this._ebsVolumeType = value;
  }
  public resetEbsVolumeType() {
    this._ebsVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeTypeInput() {
    return this._ebsVolumeType;
  }

  // instance_size - computed: false, optional: false, required: true
  private _instanceSize?: string; 
  public get instanceSize() {
    return this.getStringAttribute('instance_size');
  }
  public set instanceSize(value: string) {
    this._instanceSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSizeInput() {
    return this._instanceSize;
  }

  // node_count - computed: false, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }
}
export interface AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#disk_iops AdvancedCluster#disk_iops}
  */
  readonly diskIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#disk_size_gb AdvancedCluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#ebs_volume_type AdvancedCluster#ebs_volume_type}
  */
  readonly ebsVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#instance_size AdvancedCluster#instance_size}
  */
  readonly instanceSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#node_count AdvancedCluster#node_count}
  */
  readonly nodeCount?: number;
}

export function advancedClusterReplicationSpecsRegionConfigsReadOnlySpecsToTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference | AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_iops: cdktf.numberToTerraform(struct!.diskIops),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    ebs_volume_type: cdktf.stringToTerraform(struct!.ebsVolumeType),
    instance_size: cdktf.stringToTerraform(struct!.instanceSize),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
  }
}


export function advancedClusterReplicationSpecsRegionConfigsReadOnlySpecsToHclTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference | AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_iops: {
      value: cdktf.numberToHclTerraform(struct!.diskIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.ebsVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_size: {
      value: cdktf.stringToHclTerraform(struct!.instanceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskIops = this._diskIops;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._ebsVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeType = this._ebsVolumeType;
    }
    if (this._instanceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSize = this._instanceSize;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskIops = undefined;
      this._diskSizeGb = undefined;
      this._ebsVolumeType = undefined;
      this._instanceSize = undefined;
      this._nodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskIops = value.diskIops;
      this._diskSizeGb = value.diskSizeGb;
      this._ebsVolumeType = value.ebsVolumeType;
      this._instanceSize = value.instanceSize;
      this._nodeCount = value.nodeCount;
    }
  }

  // disk_iops - computed: true, optional: true, required: false
  private _diskIops?: number; 
  public get diskIops() {
    return this.getNumberAttribute('disk_iops');
  }
  public set diskIops(value: number) {
    this._diskIops = value;
  }
  public resetDiskIops() {
    this._diskIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIopsInput() {
    return this._diskIops;
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

  // ebs_volume_type - computed: true, optional: true, required: false
  private _ebsVolumeType?: string; 
  public get ebsVolumeType() {
    return this.getStringAttribute('ebs_volume_type');
  }
  public set ebsVolumeType(value: string) {
    this._ebsVolumeType = value;
  }
  public resetEbsVolumeType() {
    this._ebsVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeTypeInput() {
    return this._ebsVolumeType;
  }

  // instance_size - computed: false, optional: false, required: true
  private _instanceSize?: string; 
  public get instanceSize() {
    return this.getStringAttribute('instance_size');
  }
  public set instanceSize(value: string) {
    this._instanceSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSizeInput() {
    return this._instanceSize;
  }

  // node_count - computed: false, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }
}
export interface AdvancedClusterReplicationSpecsRegionConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#backing_provider_name AdvancedCluster#backing_provider_name}
  */
  readonly backingProviderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#priority AdvancedCluster#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#provider_name AdvancedCluster#provider_name}
  */
  readonly providerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#region_name AdvancedCluster#region_name}
  */
  readonly regionName: string;
  /**
  * analytics_auto_scaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#analytics_auto_scaling AdvancedCluster#analytics_auto_scaling}
  */
  readonly analyticsAutoScaling?: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling;
  /**
  * analytics_specs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#analytics_specs AdvancedCluster#analytics_specs}
  */
  readonly analyticsSpecs?: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs;
  /**
  * auto_scaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#auto_scaling AdvancedCluster#auto_scaling}
  */
  readonly autoScaling?: AdvancedClusterReplicationSpecsRegionConfigsAutoScaling;
  /**
  * electable_specs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#electable_specs AdvancedCluster#electable_specs}
  */
  readonly electableSpecs?: AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs;
  /**
  * read_only_specs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#read_only_specs AdvancedCluster#read_only_specs}
  */
  readonly readOnlySpecs?: AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs;
}

export function advancedClusterReplicationSpecsRegionConfigsToTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backing_provider_name: cdktf.stringToTerraform(struct!.backingProviderName),
    priority: cdktf.numberToTerraform(struct!.priority),
    provider_name: cdktf.stringToTerraform(struct!.providerName),
    region_name: cdktf.stringToTerraform(struct!.regionName),
    analytics_auto_scaling: advancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingToTerraform(struct!.analyticsAutoScaling),
    analytics_specs: advancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsToTerraform(struct!.analyticsSpecs),
    auto_scaling: advancedClusterReplicationSpecsRegionConfigsAutoScalingToTerraform(struct!.autoScaling),
    electable_specs: advancedClusterReplicationSpecsRegionConfigsElectableSpecsToTerraform(struct!.electableSpecs),
    read_only_specs: advancedClusterReplicationSpecsRegionConfigsReadOnlySpecsToTerraform(struct!.readOnlySpecs),
  }
}


export function advancedClusterReplicationSpecsRegionConfigsToHclTerraform(struct?: AdvancedClusterReplicationSpecsRegionConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backing_provider_name: {
      value: cdktf.stringToHclTerraform(struct!.backingProviderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provider_name: {
      value: cdktf.stringToHclTerraform(struct!.providerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_name: {
      value: cdktf.stringToHclTerraform(struct!.regionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analytics_auto_scaling: {
      value: advancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingToHclTerraform(struct!.analyticsAutoScaling),
      isBlock: true,
      type: "list",
      storageClassType: "AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList",
    },
    analytics_specs: {
      value: advancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsToHclTerraform(struct!.analyticsSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList",
    },
    auto_scaling: {
      value: advancedClusterReplicationSpecsRegionConfigsAutoScalingToHclTerraform(struct!.autoScaling),
      isBlock: true,
      type: "list",
      storageClassType: "AdvancedClusterReplicationSpecsRegionConfigsAutoScalingList",
    },
    electable_specs: {
      value: advancedClusterReplicationSpecsRegionConfigsElectableSpecsToHclTerraform(struct!.electableSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList",
    },
    read_only_specs: {
      value: advancedClusterReplicationSpecsRegionConfigsReadOnlySpecsToHclTerraform(struct!.readOnlySpecs),
      isBlock: true,
      type: "list",
      storageClassType: "AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvancedClusterReplicationSpecsRegionConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdvancedClusterReplicationSpecsRegionConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backingProviderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backingProviderName = this._backingProviderName;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._providerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerName = this._providerName;
    }
    if (this._regionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionName = this._regionName;
    }
    if (this._analyticsAutoScaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyticsAutoScaling = this._analyticsAutoScaling?.internalValue;
    }
    if (this._analyticsSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyticsSpecs = this._analyticsSpecs?.internalValue;
    }
    if (this._autoScaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScaling = this._autoScaling?.internalValue;
    }
    if (this._electableSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.electableSpecs = this._electableSpecs?.internalValue;
    }
    if (this._readOnlySpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlySpecs = this._readOnlySpecs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterReplicationSpecsRegionConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backingProviderName = undefined;
      this._priority = undefined;
      this._providerName = undefined;
      this._regionName = undefined;
      this._analyticsAutoScaling.internalValue = undefined;
      this._analyticsSpecs.internalValue = undefined;
      this._autoScaling.internalValue = undefined;
      this._electableSpecs.internalValue = undefined;
      this._readOnlySpecs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backingProviderName = value.backingProviderName;
      this._priority = value.priority;
      this._providerName = value.providerName;
      this._regionName = value.regionName;
      this._analyticsAutoScaling.internalValue = value.analyticsAutoScaling;
      this._analyticsSpecs.internalValue = value.analyticsSpecs;
      this._autoScaling.internalValue = value.autoScaling;
      this._electableSpecs.internalValue = value.electableSpecs;
      this._readOnlySpecs.internalValue = value.readOnlySpecs;
    }
  }

  // backing_provider_name - computed: false, optional: true, required: false
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // analytics_auto_scaling - computed: false, optional: true, required: false
  private _analyticsAutoScaling = new AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference(this, "analytics_auto_scaling");
  public get analyticsAutoScaling() {
    return this._analyticsAutoScaling;
  }
  public putAnalyticsAutoScaling(value: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling) {
    this._analyticsAutoScaling.internalValue = value;
  }
  public resetAnalyticsAutoScaling() {
    this._analyticsAutoScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsAutoScalingInput() {
    return this._analyticsAutoScaling.internalValue;
  }

  // analytics_specs - computed: false, optional: true, required: false
  private _analyticsSpecs = new AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference(this, "analytics_specs");
  public get analyticsSpecs() {
    return this._analyticsSpecs;
  }
  public putAnalyticsSpecs(value: AdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs) {
    this._analyticsSpecs.internalValue = value;
  }
  public resetAnalyticsSpecs() {
    this._analyticsSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsSpecsInput() {
    return this._analyticsSpecs.internalValue;
  }

  // auto_scaling - computed: false, optional: true, required: false
  private _autoScaling = new AdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference(this, "auto_scaling");
  public get autoScaling() {
    return this._autoScaling;
  }
  public putAutoScaling(value: AdvancedClusterReplicationSpecsRegionConfigsAutoScaling) {
    this._autoScaling.internalValue = value;
  }
  public resetAutoScaling() {
    this._autoScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingInput() {
    return this._autoScaling.internalValue;
  }

  // electable_specs - computed: false, optional: true, required: false
  private _electableSpecs = new AdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference(this, "electable_specs");
  public get electableSpecs() {
    return this._electableSpecs;
  }
  public putElectableSpecs(value: AdvancedClusterReplicationSpecsRegionConfigsElectableSpecs) {
    this._electableSpecs.internalValue = value;
  }
  public resetElectableSpecs() {
    this._electableSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electableSpecsInput() {
    return this._electableSpecs.internalValue;
  }

  // read_only_specs - computed: false, optional: true, required: false
  private _readOnlySpecs = new AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference(this, "read_only_specs");
  public get readOnlySpecs() {
    return this._readOnlySpecs;
  }
  public putReadOnlySpecs(value: AdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs) {
    this._readOnlySpecs.internalValue = value;
  }
  public resetReadOnlySpecs() {
    this._readOnlySpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlySpecsInput() {
    return this._readOnlySpecs.internalValue;
  }
}

export class AdvancedClusterReplicationSpecsRegionConfigsList extends cdktf.ComplexList {
  public internalValue? : AdvancedClusterReplicationSpecsRegionConfigs[] | cdktf.IResolvable

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
  public get(index: number): AdvancedClusterReplicationSpecsRegionConfigsOutputReference {
    return new AdvancedClusterReplicationSpecsRegionConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdvancedClusterReplicationSpecs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#num_shards AdvancedCluster#num_shards}
  */
  readonly numShards?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#zone_name AdvancedCluster#zone_name}
  */
  readonly zoneName?: string;
  /**
  * region_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#region_configs AdvancedCluster#region_configs}
  */
  readonly regionConfigs: AdvancedClusterReplicationSpecsRegionConfigs[] | cdktf.IResolvable;
}

export function advancedClusterReplicationSpecsToTerraform(struct?: AdvancedClusterReplicationSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_shards: cdktf.numberToTerraform(struct!.numShards),
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
    region_configs: cdktf.listMapper(advancedClusterReplicationSpecsRegionConfigsToTerraform, true)(struct!.regionConfigs),
  }
}


export function advancedClusterReplicationSpecsToHclTerraform(struct?: AdvancedClusterReplicationSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    region_configs: {
      value: cdktf.listMapperHcl(advancedClusterReplicationSpecsRegionConfigsToHclTerraform, true)(struct!.regionConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "AdvancedClusterReplicationSpecsRegionConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvancedClusterReplicationSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdvancedClusterReplicationSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numShards !== undefined) {
      hasAnyValues = true;
      internalValueResult.numShards = this._numShards;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    if (this._regionConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionConfigs = this._regionConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedClusterReplicationSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numShards = undefined;
      this._zoneName = undefined;
      this._regionConfigs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numShards = value.numShards;
      this._zoneName = value.zoneName;
      this._regionConfigs.internalValue = value.regionConfigs;
    }
  }

  // container_id - computed: true, optional: false, required: false
  private _containerId = new cdktf.StringMap(this, "container_id");
  public get containerId() {
    return this._containerId;
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // num_shards - computed: false, optional: true, required: false
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

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
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

  // region_configs - computed: false, optional: false, required: true
  private _regionConfigs = new AdvancedClusterReplicationSpecsRegionConfigsList(this, "region_configs", false);
  public get regionConfigs() {
    return this._regionConfigs;
  }
  public putRegionConfigs(value: AdvancedClusterReplicationSpecsRegionConfigs[] | cdktf.IResolvable) {
    this._regionConfigs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionConfigsInput() {
    return this._regionConfigs.internalValue;
  }
}

export class AdvancedClusterReplicationSpecsList extends cdktf.ComplexList {
  public internalValue? : AdvancedClusterReplicationSpecs[] | cdktf.IResolvable

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
  public get(index: number): AdvancedClusterReplicationSpecsOutputReference {
    return new AdvancedClusterReplicationSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdvancedClusterTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#key AdvancedCluster#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#value AdvancedCluster#value}
  */
  readonly value: string;
}

export function advancedClusterTagsToTerraform(struct?: AdvancedClusterTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function advancedClusterTagsToHclTerraform(struct?: AdvancedClusterTags | cdktf.IResolvable): any {
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

export class AdvancedClusterTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdvancedClusterTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AdvancedClusterTags | cdktf.IResolvable | undefined) {
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

export class AdvancedClusterTagsList extends cdktf.ComplexList {
  public internalValue? : AdvancedClusterTags[] | cdktf.IResolvable

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
  public get(index: number): AdvancedClusterTagsOutputReference {
    return new AdvancedClusterTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdvancedClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#create AdvancedCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#delete AdvancedCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#update AdvancedCluster#update}
  */
  readonly update?: string;
}

export function advancedClusterTimeoutsToTerraform(struct?: AdvancedClusterTimeouts | cdktf.IResolvable): any {
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


export function advancedClusterTimeoutsToHclTerraform(struct?: AdvancedClusterTimeouts | cdktf.IResolvable): any {
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

export class AdvancedClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdvancedClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AdvancedClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster mongodbatlas_advanced_cluster}
*/
export class AdvancedCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_advanced_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdvancedCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdvancedCluster to import
  * @param importFromId The id of the existing AdvancedCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdvancedCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_advanced_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/advanced_cluster mongodbatlas_advanced_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdvancedClusterConfig
  */
  public constructor(scope: Construct, id: string, config: AdvancedClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_advanced_cluster',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.38.0',
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
    this._backupEnabled = config.backupEnabled;
    this._clusterType = config.clusterType;
    this._configServerManagementMode = config.configServerManagementMode;
    this._deleteOnCreateTimeout = config.deleteOnCreateTimeout;
    this._diskSizeGb = config.diskSizeGb;
    this._encryptionAtRestProvider = config.encryptionAtRestProvider;
    this._globalClusterSelfManagedSharding = config.globalClusterSelfManagedSharding;
    this._id = config.id;
    this._mongoDbMajorVersion = config.mongoDbMajorVersion;
    this._name = config.name;
    this._paused = config.paused;
    this._pitEnabled = config.pitEnabled;
    this._projectId = config.projectId;
    this._redactClientLogData = config.redactClientLogData;
    this._replicaSetScalingStrategy = config.replicaSetScalingStrategy;
    this._retainBackupsEnabled = config.retainBackupsEnabled;
    this._rootCertType = config.rootCertType;
    this._terminationProtectionEnabled = config.terminationProtectionEnabled;
    this._versionReleaseSystem = config.versionReleaseSystem;
    this._advancedConfiguration.internalValue = config.advancedConfiguration;
    this._biConnectorConfig.internalValue = config.biConnectorConfig;
    this._labels.internalValue = config.labels;
    this._pinnedFcv.internalValue = config.pinnedFcv;
    this._replicationSpecs.internalValue = config.replicationSpecs;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_data_risks_and_force_replica_set_reconfig - computed: false, optional: true, required: false
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

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_type - computed: false, optional: false, required: true
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // config_server_management_mode - computed: true, optional: true, required: false
  private _configServerManagementMode?: string; 
  public get configServerManagementMode() {
    return this.getStringAttribute('config_server_management_mode');
  }
  public set configServerManagementMode(value: string) {
    this._configServerManagementMode = value;
  }
  public resetConfigServerManagementMode() {
    this._configServerManagementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configServerManagementModeInput() {
    return this._configServerManagementMode;
  }

  // config_server_type - computed: true, optional: false, required: false
  public get configServerType() {
    return this.getStringAttribute('config_server_type');
  }

  // connection_strings - computed: true, optional: false, required: false
  private _connectionStrings = new AdvancedClusterConnectionStringsList(this, "connection_strings", false);
  public get connectionStrings() {
    return this._connectionStrings;
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // delete_on_create_timeout - computed: false, optional: true, required: false
  private _deleteOnCreateTimeout?: boolean | cdktf.IResolvable; 
  public get deleteOnCreateTimeout() {
    return this.getBooleanAttribute('delete_on_create_timeout');
  }
  public set deleteOnCreateTimeout(value: boolean | cdktf.IResolvable) {
    this._deleteOnCreateTimeout = value;
  }
  public resetDeleteOnCreateTimeout() {
    this._deleteOnCreateTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnCreateTimeoutInput() {
    return this._deleteOnCreateTimeout;
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

  // global_cluster_self_managed_sharding - computed: true, optional: true, required: false
  private _globalClusterSelfManagedSharding?: boolean | cdktf.IResolvable; 
  public get globalClusterSelfManagedSharding() {
    return this.getBooleanAttribute('global_cluster_self_managed_sharding');
  }
  public set globalClusterSelfManagedSharding(value: boolean | cdktf.IResolvable) {
    this._globalClusterSelfManagedSharding = value;
  }
  public resetGlobalClusterSelfManagedSharding() {
    this._globalClusterSelfManagedSharding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterSelfManagedShardingInput() {
    return this._globalClusterSelfManagedSharding;
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

  // redact_client_log_data - computed: true, optional: true, required: false
  private _redactClientLogData?: boolean | cdktf.IResolvable; 
  public get redactClientLogData() {
    return this.getBooleanAttribute('redact_client_log_data');
  }
  public set redactClientLogData(value: boolean | cdktf.IResolvable) {
    this._redactClientLogData = value;
  }
  public resetRedactClientLogData() {
    this._redactClientLogData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactClientLogDataInput() {
    return this._redactClientLogData;
  }

  // replica_set_scaling_strategy - computed: true, optional: true, required: false
  private _replicaSetScalingStrategy?: string; 
  public get replicaSetScalingStrategy() {
    return this.getStringAttribute('replica_set_scaling_strategy');
  }
  public set replicaSetScalingStrategy(value: string) {
    this._replicaSetScalingStrategy = value;
  }
  public resetReplicaSetScalingStrategy() {
    this._replicaSetScalingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaSetScalingStrategyInput() {
    return this._replicaSetScalingStrategy;
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

  // root_cert_type - computed: true, optional: true, required: false
  private _rootCertType?: string; 
  public get rootCertType() {
    return this.getStringAttribute('root_cert_type');
  }
  public set rootCertType(value: string) {
    this._rootCertType = value;
  }
  public resetRootCertType() {
    this._rootCertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCertTypeInput() {
    return this._rootCertType;
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
  private _advancedConfiguration = new AdvancedClusterAdvancedConfigurationOutputReference(this, "advanced_configuration");
  public get advancedConfiguration() {
    return this._advancedConfiguration;
  }
  public putAdvancedConfiguration(value: AdvancedClusterAdvancedConfiguration) {
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
  private _biConnectorConfig = new AdvancedClusterBiConnectorConfigOutputReference(this, "bi_connector_config");
  public get biConnectorConfig() {
    return this._biConnectorConfig;
  }
  public putBiConnectorConfig(value: AdvancedClusterBiConnectorConfig) {
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
  private _labels = new AdvancedClusterLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: AdvancedClusterLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // pinned_fcv - computed: false, optional: true, required: false
  private _pinnedFcv = new AdvancedClusterPinnedFcvOutputReference(this, "pinned_fcv");
  public get pinnedFcv() {
    return this._pinnedFcv;
  }
  public putPinnedFcv(value: AdvancedClusterPinnedFcv) {
    this._pinnedFcv.internalValue = value;
  }
  public resetPinnedFcv() {
    this._pinnedFcv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinnedFcvInput() {
    return this._pinnedFcv.internalValue;
  }

  // replication_specs - computed: false, optional: false, required: true
  private _replicationSpecs = new AdvancedClusterReplicationSpecsList(this, "replication_specs", false);
  public get replicationSpecs() {
    return this._replicationSpecs;
  }
  public putReplicationSpecs(value: AdvancedClusterReplicationSpecs[] | cdktf.IResolvable) {
    this._replicationSpecs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSpecsInput() {
    return this._replicationSpecs.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new AdvancedClusterTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AdvancedClusterTags[] | cdktf.IResolvable) {
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
  private _timeouts = new AdvancedClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AdvancedClusterTimeouts) {
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
      backup_enabled: cdktf.booleanToTerraform(this._backupEnabled),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      config_server_management_mode: cdktf.stringToTerraform(this._configServerManagementMode),
      delete_on_create_timeout: cdktf.booleanToTerraform(this._deleteOnCreateTimeout),
      disk_size_gb: cdktf.numberToTerraform(this._diskSizeGb),
      encryption_at_rest_provider: cdktf.stringToTerraform(this._encryptionAtRestProvider),
      global_cluster_self_managed_sharding: cdktf.booleanToTerraform(this._globalClusterSelfManagedSharding),
      id: cdktf.stringToTerraform(this._id),
      mongo_db_major_version: cdktf.stringToTerraform(this._mongoDbMajorVersion),
      name: cdktf.stringToTerraform(this._name),
      paused: cdktf.booleanToTerraform(this._paused),
      pit_enabled: cdktf.booleanToTerraform(this._pitEnabled),
      project_id: cdktf.stringToTerraform(this._projectId),
      redact_client_log_data: cdktf.booleanToTerraform(this._redactClientLogData),
      replica_set_scaling_strategy: cdktf.stringToTerraform(this._replicaSetScalingStrategy),
      retain_backups_enabled: cdktf.booleanToTerraform(this._retainBackupsEnabled),
      root_cert_type: cdktf.stringToTerraform(this._rootCertType),
      termination_protection_enabled: cdktf.booleanToTerraform(this._terminationProtectionEnabled),
      version_release_system: cdktf.stringToTerraform(this._versionReleaseSystem),
      advanced_configuration: advancedClusterAdvancedConfigurationToTerraform(this._advancedConfiguration.internalValue),
      bi_connector_config: advancedClusterBiConnectorConfigToTerraform(this._biConnectorConfig.internalValue),
      labels: cdktf.listMapper(advancedClusterLabelsToTerraform, true)(this._labels.internalValue),
      pinned_fcv: advancedClusterPinnedFcvToTerraform(this._pinnedFcv.internalValue),
      replication_specs: cdktf.listMapper(advancedClusterReplicationSpecsToTerraform, true)(this._replicationSpecs.internalValue),
      tags: cdktf.listMapper(advancedClusterTagsToTerraform, true)(this._tags.internalValue),
      timeouts: advancedClusterTimeoutsToTerraform(this._timeouts.internalValue),
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
      backup_enabled: {
        value: cdktf.booleanToHclTerraform(this._backupEnabled),
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
      config_server_management_mode: {
        value: cdktf.stringToHclTerraform(this._configServerManagementMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_on_create_timeout: {
        value: cdktf.booleanToHclTerraform(this._deleteOnCreateTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      global_cluster_self_managed_sharding: {
        value: cdktf.booleanToHclTerraform(this._globalClusterSelfManagedSharding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      redact_client_log_data: {
        value: cdktf.booleanToHclTerraform(this._redactClientLogData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replica_set_scaling_strategy: {
        value: cdktf.stringToHclTerraform(this._replicaSetScalingStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_backups_enabled: {
        value: cdktf.booleanToHclTerraform(this._retainBackupsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      root_cert_type: {
        value: cdktf.stringToHclTerraform(this._rootCertType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: advancedClusterAdvancedConfigurationToHclTerraform(this._advancedConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdvancedClusterAdvancedConfigurationList",
      },
      bi_connector_config: {
        value: advancedClusterBiConnectorConfigToHclTerraform(this._biConnectorConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdvancedClusterBiConnectorConfigList",
      },
      labels: {
        value: cdktf.listMapperHcl(advancedClusterLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AdvancedClusterLabelsList",
      },
      pinned_fcv: {
        value: advancedClusterPinnedFcvToHclTerraform(this._pinnedFcv.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdvancedClusterPinnedFcvList",
      },
      replication_specs: {
        value: cdktf.listMapperHcl(advancedClusterReplicationSpecsToHclTerraform, true)(this._replicationSpecs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdvancedClusterReplicationSpecsList",
      },
      tags: {
        value: cdktf.listMapperHcl(advancedClusterTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AdvancedClusterTagsList",
      },
      timeouts: {
        value: advancedClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AdvancedClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
