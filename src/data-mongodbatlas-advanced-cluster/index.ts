// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/advanced_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasAdvancedClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/advanced_cluster#id DataMongodbatlasAdvancedCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/advanced_cluster#name DataMongodbatlasAdvancedCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/advanced_cluster#pit_enabled DataMongodbatlasAdvancedCluster#pit_enabled}
  */
  readonly pitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/advanced_cluster#project_id DataMongodbatlasAdvancedCluster#project_id}
  */
  readonly projectId: string;
}
export interface DataMongodbatlasAdvancedClusterAdvancedConfiguration {
}

export function dataMongodbatlasAdvancedClusterAdvancedConfigurationToTerraform(struct?: DataMongodbatlasAdvancedClusterAdvancedConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClusterAdvancedConfigurationToHclTerraform(struct?: DataMongodbatlasAdvancedClusterAdvancedConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasAdvancedClusterAdvancedConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClusterAdvancedConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_read_concern - computed: true, optional: false, required: false
  public get defaultReadConcern() {
    return this.getStringAttribute('default_read_concern');
  }

  // default_write_concern - computed: true, optional: false, required: false
  public get defaultWriteConcern() {
    return this.getStringAttribute('default_write_concern');
  }

  // fail_index_key_too_long - computed: true, optional: false, required: false
  public get failIndexKeyTooLong() {
    return this.getBooleanAttribute('fail_index_key_too_long');
  }

  // javascript_enabled - computed: true, optional: false, required: false
  public get javascriptEnabled() {
    return this.getBooleanAttribute('javascript_enabled');
  }

  // minimum_enabled_tls_protocol - computed: true, optional: false, required: false
  public get minimumEnabledTlsProtocol() {
    return this.getStringAttribute('minimum_enabled_tls_protocol');
  }

  // no_table_scan - computed: true, optional: false, required: false
  public get noTableScan() {
    return this.getBooleanAttribute('no_table_scan');
  }

  // oplog_min_retention_hours - computed: true, optional: false, required: false
  public get oplogMinRetentionHours() {
    return this.getNumberAttribute('oplog_min_retention_hours');
  }

  // oplog_size_mb - computed: true, optional: false, required: false
  public get oplogSizeMb() {
    return this.getNumberAttribute('oplog_size_mb');
  }

  // sample_refresh_interval_bi_connector - computed: true, optional: false, required: false
  public get sampleRefreshIntervalBiConnector() {
    return this.getNumberAttribute('sample_refresh_interval_bi_connector');
  }

  // sample_size_bi_connector - computed: true, optional: false, required: false
  public get sampleSizeBiConnector() {
    return this.getNumberAttribute('sample_size_bi_connector');
  }

  // transaction_lifetime_limit_seconds - computed: true, optional: false, required: false
  public get transactionLifetimeLimitSeconds() {
    return this.getNumberAttribute('transaction_lifetime_limit_seconds');
  }
}

export class DataMongodbatlasAdvancedClusterAdvancedConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference {
    return new DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAdvancedClusterBiConnectorConfig {
}

export function dataMongodbatlasAdvancedClusterBiConnectorConfigToTerraform(struct?: DataMongodbatlasAdvancedClusterBiConnectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClusterBiConnectorConfigToHclTerraform(struct?: DataMongodbatlasAdvancedClusterBiConnectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasAdvancedClusterBiConnectorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClusterBiConnectorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // read_preference - computed: true, optional: false, required: false
  public get readPreference() {
    return this.getStringAttribute('read_preference');
  }
}

export class DataMongodbatlasAdvancedClusterBiConnectorConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference {
    return new DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints {
}

export function dataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsToTerraform(struct?: DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsToHclTerraform(struct?: DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints | undefined) {
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

export class DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference {
    return new DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint {
}

export function dataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointToTerraform(struct?: DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointToHclTerraform(struct?: DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint | undefined) {
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
  private _endpoints = new DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList(this, "endpoints", false);
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

export class DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference {
    return new DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAdvancedClusterConnectionStrings {
}

export function dataMongodbatlasAdvancedClusterConnectionStringsToTerraform(struct?: DataMongodbatlasAdvancedClusterConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClusterConnectionStringsToHclTerraform(struct?: DataMongodbatlasAdvancedClusterConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClusterConnectionStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasAdvancedClusterConnectionStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClusterConnectionStrings | undefined) {
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
  private _privateEndpoint = new DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList(this, "private_endpoint", false);
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

export class DataMongodbatlasAdvancedClusterConnectionStringsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasAdvancedClusterConnectionStringsOutputReference {
    return new DataMongodbatlasAdvancedClusterConnectionStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAdvancedClusterLabels {
}

export function dataMongodbatlasAdvancedClusterLabelsToTerraform(struct?: DataMongodbatlasAdvancedClusterLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClusterLabelsToHclTerraform(struct?: DataMongodbatlasAdvancedClusterLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClusterLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasAdvancedClusterLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClusterLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataMongodbatlasAdvancedClusterLabelsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasAdvancedClusterLabelsOutputReference {
    return new DataMongodbatlasAdvancedClusterLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling {
}

export function dataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingToTerraform(struct?: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingToHclTerraform(struct?: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_enabled - computed: true, optional: false, required: false
  public get computeEnabled() {
    return this.getBooleanAttribute('compute_enabled');
  }

  // compute_max_instance_size - computed: true, optional: false, required: false
  public get computeMaxInstanceSize() {
    return this.getStringAttribute('compute_max_instance_size');
  }

  // compute_min_instance_size - computed: true, optional: false, required: false
  public get computeMinInstanceSize() {
    return this.getStringAttribute('compute_min_instance_size');
  }

  // compute_scale_down_enabled - computed: true, optional: false, required: false
  public get computeScaleDownEnabled() {
    return this.getBooleanAttribute('compute_scale_down_enabled');
  }

  // disk_gb_enabled - computed: true, optional: false, required: false
  public get diskGbEnabled() {
    return this.getBooleanAttribute('disk_gb_enabled');
  }
}

export class DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference {
    return new DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs {
}

export function dataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsToTerraform(struct?: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsToHclTerraform(struct?: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_iops - computed: true, optional: false, required: false
  public get diskIops() {
    return this.getNumberAttribute('disk_iops');
  }

  // ebs_volume_type - computed: true, optional: false, required: false
  public get ebsVolumeType() {
    return this.getStringAttribute('ebs_volume_type');
  }

  // instance_size - computed: true, optional: false, required: false
  public get instanceSize() {
    return this.getStringAttribute('instance_size');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
}

export class DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference {
    return new DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling {
}

export function dataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingToTerraform(struct?: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingToHclTerraform(struct?: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_enabled - computed: true, optional: false, required: false
  public get computeEnabled() {
    return this.getBooleanAttribute('compute_enabled');
  }

  // compute_max_instance_size - computed: true, optional: false, required: false
  public get computeMaxInstanceSize() {
    return this.getStringAttribute('compute_max_instance_size');
  }

  // compute_min_instance_size - computed: true, optional: false, required: false
  public get computeMinInstanceSize() {
    return this.getStringAttribute('compute_min_instance_size');
  }

  // compute_scale_down_enabled - computed: true, optional: false, required: false
  public get computeScaleDownEnabled() {
    return this.getBooleanAttribute('compute_scale_down_enabled');
  }

  // disk_gb_enabled - computed: true, optional: false, required: false
  public get diskGbEnabled() {
    return this.getBooleanAttribute('disk_gb_enabled');
  }
}

export class DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference {
    return new DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs {
}

export function dataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsToTerraform(struct?: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsToHclTerraform(struct?: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_iops - computed: true, optional: false, required: false
  public get diskIops() {
    return this.getNumberAttribute('disk_iops');
  }

  // ebs_volume_type - computed: true, optional: false, required: false
  public get ebsVolumeType() {
    return this.getStringAttribute('ebs_volume_type');
  }

  // instance_size - computed: true, optional: false, required: false
  public get instanceSize() {
    return this.getStringAttribute('instance_size');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
}

export class DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference {
    return new DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs {
}

export function dataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsToTerraform(struct?: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsToHclTerraform(struct?: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_iops - computed: true, optional: false, required: false
  public get diskIops() {
    return this.getNumberAttribute('disk_iops');
  }

  // ebs_volume_type - computed: true, optional: false, required: false
  public get ebsVolumeType() {
    return this.getStringAttribute('ebs_volume_type');
  }

  // instance_size - computed: true, optional: false, required: false
  public get instanceSize() {
    return this.getStringAttribute('instance_size');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
}

export class DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference {
    return new DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs {
}

export function dataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsToTerraform(struct?: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsToHclTerraform(struct?: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analytics_auto_scaling - computed: true, optional: false, required: false
  private _analyticsAutoScaling = new DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList(this, "analytics_auto_scaling", false);
  public get analyticsAutoScaling() {
    return this._analyticsAutoScaling;
  }

  // analytics_specs - computed: true, optional: false, required: false
  private _analyticsSpecs = new DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList(this, "analytics_specs", false);
  public get analyticsSpecs() {
    return this._analyticsSpecs;
  }

  // auto_scaling - computed: true, optional: false, required: false
  private _autoScaling = new DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList(this, "auto_scaling", false);
  public get autoScaling() {
    return this._autoScaling;
  }

  // backing_provider_name - computed: true, optional: false, required: false
  public get backingProviderName() {
    return this.getStringAttribute('backing_provider_name');
  }

  // electable_specs - computed: true, optional: false, required: false
  private _electableSpecs = new DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList(this, "electable_specs", false);
  public get electableSpecs() {
    return this._electableSpecs;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // read_only_specs - computed: true, optional: false, required: false
  private _readOnlySpecs = new DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList(this, "read_only_specs", false);
  public get readOnlySpecs() {
    return this._readOnlySpecs;
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
}

export class DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference {
    return new DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAdvancedClusterReplicationSpecs {
}

export function dataMongodbatlasAdvancedClusterReplicationSpecsToTerraform(struct?: DataMongodbatlasAdvancedClusterReplicationSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClusterReplicationSpecsToHclTerraform(struct?: DataMongodbatlasAdvancedClusterReplicationSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasAdvancedClusterReplicationSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClusterReplicationSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_id - computed: true, optional: false, required: false
  private _containerId = new cdktf.StringMap(this, "container_id");
  public get containerId() {
    return this._containerId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // num_shards - computed: true, optional: false, required: false
  public get numShards() {
    return this.getNumberAttribute('num_shards');
  }

  // region_configs - computed: true, optional: false, required: false
  private _regionConfigs = new DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList(this, "region_configs", false);
  public get regionConfigs() {
    return this._regionConfigs;
  }

  // zone_name - computed: true, optional: false, required: false
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
}

export class DataMongodbatlasAdvancedClusterReplicationSpecsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference {
    return new DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAdvancedClusterTags {
}

export function dataMongodbatlasAdvancedClusterTagsToTerraform(struct?: DataMongodbatlasAdvancedClusterTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClusterTagsToHclTerraform(struct?: DataMongodbatlasAdvancedClusterTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClusterTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasAdvancedClusterTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClusterTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataMongodbatlasAdvancedClusterTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasAdvancedClusterTagsOutputReference {
    return new DataMongodbatlasAdvancedClusterTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/advanced_cluster mongodbatlas_advanced_cluster}
*/
export class DataMongodbatlasAdvancedCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_advanced_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasAdvancedCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasAdvancedCluster to import
  * @param importFromId The id of the existing DataMongodbatlasAdvancedCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/advanced_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasAdvancedCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_advanced_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/advanced_cluster mongodbatlas_advanced_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasAdvancedClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasAdvancedClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_advanced_cluster',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.17.1',
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
    this._pitEnabled = config.pitEnabled;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_configuration - computed: true, optional: false, required: false
  private _advancedConfiguration = new DataMongodbatlasAdvancedClusterAdvancedConfigurationList(this, "advanced_configuration", false);
  public get advancedConfiguration() {
    return this._advancedConfiguration;
  }

  // backup_enabled - computed: true, optional: false, required: false
  public get backupEnabled() {
    return this.getBooleanAttribute('backup_enabled');
  }

  // bi_connector_config - computed: true, optional: false, required: false
  private _biConnectorConfig = new DataMongodbatlasAdvancedClusterBiConnectorConfigList(this, "bi_connector_config", false);
  public get biConnectorConfig() {
    return this._biConnectorConfig;
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // connection_strings - computed: true, optional: false, required: false
  private _connectionStrings = new DataMongodbatlasAdvancedClusterConnectionStringsList(this, "connection_strings", false);
  public get connectionStrings() {
    return this._connectionStrings;
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // disk_size_gb - computed: true, optional: false, required: false
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // encryption_at_rest_provider - computed: true, optional: false, required: false
  public get encryptionAtRestProvider() {
    return this.getStringAttribute('encryption_at_rest_provider');
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

  // labels - computed: true, optional: false, required: false
  private _labels = new DataMongodbatlasAdvancedClusterLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }

  // mongo_db_major_version - computed: true, optional: false, required: false
  public get mongoDbMajorVersion() {
    return this.getStringAttribute('mongo_db_major_version');
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

  // paused - computed: true, optional: false, required: false
  public get paused() {
    return this.getBooleanAttribute('paused');
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

  // replication_specs - computed: true, optional: false, required: false
  private _replicationSpecs = new DataMongodbatlasAdvancedClusterReplicationSpecsList(this, "replication_specs", false);
  public get replicationSpecs() {
    return this._replicationSpecs;
  }

  // root_cert_type - computed: true, optional: false, required: false
  public get rootCertType() {
    return this.getStringAttribute('root_cert_type');
  }

  // state_name - computed: true, optional: false, required: false
  public get stateName() {
    return this.getStringAttribute('state_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataMongodbatlasAdvancedClusterTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // termination_protection_enabled - computed: true, optional: false, required: false
  public get terminationProtectionEnabled() {
    return this.getBooleanAttribute('termination_protection_enabled');
  }

  // version_release_system - computed: true, optional: false, required: false
  public get versionReleaseSystem() {
    return this.getStringAttribute('version_release_system');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pit_enabled: cdktf.booleanToTerraform(this._pitEnabled),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
