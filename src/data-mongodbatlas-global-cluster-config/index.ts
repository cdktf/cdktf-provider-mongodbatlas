/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/data-sources/global_cluster_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasGlobalClusterConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/data-sources/global_cluster_config#cluster_name DataMongodbatlasGlobalClusterConfig#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/data-sources/global_cluster_config#id DataMongodbatlasGlobalClusterConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/data-sources/global_cluster_config#project_id DataMongodbatlasGlobalClusterConfig#project_id}
  */
  readonly projectId: string;
  /**
  * managed_namespaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/data-sources/global_cluster_config#managed_namespaces DataMongodbatlasGlobalClusterConfig#managed_namespaces}
  */
  readonly managedNamespaces?: DataMongodbatlasGlobalClusterConfigManagedNamespaces[] | cdktf.IResolvable;
}
export interface DataMongodbatlasGlobalClusterConfigManagedNamespaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/data-sources/global_cluster_config#collection DataMongodbatlasGlobalClusterConfig#collection}
  */
  readonly collection: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/data-sources/global_cluster_config#custom_shard_key DataMongodbatlasGlobalClusterConfig#custom_shard_key}
  */
  readonly customShardKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/data-sources/global_cluster_config#db DataMongodbatlasGlobalClusterConfig#db}
  */
  readonly db: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/data-sources/global_cluster_config#is_custom_shard_key_hashed DataMongodbatlasGlobalClusterConfig#is_custom_shard_key_hashed}
  */
  readonly isCustomShardKeyHashed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/data-sources/global_cluster_config#is_shard_key_unique DataMongodbatlasGlobalClusterConfig#is_shard_key_unique}
  */
  readonly isShardKeyUnique?: boolean | cdktf.IResolvable;
}

export function dataMongodbatlasGlobalClusterConfigManagedNamespacesToTerraform(struct?: DataMongodbatlasGlobalClusterConfigManagedNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection: cdktf.stringToTerraform(struct!.collection),
    custom_shard_key: cdktf.stringToTerraform(struct!.customShardKey),
    db: cdktf.stringToTerraform(struct!.db),
    is_custom_shard_key_hashed: cdktf.booleanToTerraform(struct!.isCustomShardKeyHashed),
    is_shard_key_unique: cdktf.booleanToTerraform(struct!.isShardKeyUnique),
  }
}


export function dataMongodbatlasGlobalClusterConfigManagedNamespacesToHclTerraform(struct?: DataMongodbatlasGlobalClusterConfigManagedNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection: {
      value: cdktf.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_shard_key: {
      value: cdktf.stringToHclTerraform(struct!.customShardKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db: {
      value: cdktf.stringToHclTerraform(struct!.db),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_custom_shard_key_hashed: {
      value: cdktf.booleanToHclTerraform(struct!.isCustomShardKeyHashed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_shard_key_unique: {
      value: cdktf.booleanToHclTerraform(struct!.isShardKeyUnique),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasGlobalClusterConfigManagedNamespaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._customShardKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.customShardKey = this._customShardKey;
    }
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    if (this._isCustomShardKeyHashed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCustomShardKeyHashed = this._isCustomShardKeyHashed;
    }
    if (this._isShardKeyUnique !== undefined) {
      hasAnyValues = true;
      internalValueResult.isShardKeyUnique = this._isShardKeyUnique;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasGlobalClusterConfigManagedNamespaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collection = undefined;
      this._customShardKey = undefined;
      this._db = undefined;
      this._isCustomShardKeyHashed = undefined;
      this._isShardKeyUnique = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collection = value.collection;
      this._customShardKey = value.customShardKey;
      this._db = value.db;
      this._isCustomShardKeyHashed = value.isCustomShardKeyHashed;
      this._isShardKeyUnique = value.isShardKeyUnique;
    }
  }

  // collection - computed: false, optional: false, required: true
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // custom_shard_key - computed: false, optional: false, required: true
  private _customShardKey?: string; 
  public get customShardKey() {
    return this.getStringAttribute('custom_shard_key');
  }
  public set customShardKey(value: string) {
    this._customShardKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customShardKeyInput() {
    return this._customShardKey;
  }

  // db - computed: false, optional: false, required: true
  private _db?: string; 
  public get db() {
    return this.getStringAttribute('db');
  }
  public set db(value: string) {
    this._db = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
  }

  // is_custom_shard_key_hashed - computed: true, optional: true, required: false
  private _isCustomShardKeyHashed?: boolean | cdktf.IResolvable; 
  public get isCustomShardKeyHashed() {
    return this.getBooleanAttribute('is_custom_shard_key_hashed');
  }
  public set isCustomShardKeyHashed(value: boolean | cdktf.IResolvable) {
    this._isCustomShardKeyHashed = value;
  }
  public resetIsCustomShardKeyHashed() {
    this._isCustomShardKeyHashed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCustomShardKeyHashedInput() {
    return this._isCustomShardKeyHashed;
  }

  // is_shard_key_unique - computed: true, optional: true, required: false
  private _isShardKeyUnique?: boolean | cdktf.IResolvable; 
  public get isShardKeyUnique() {
    return this.getBooleanAttribute('is_shard_key_unique');
  }
  public set isShardKeyUnique(value: boolean | cdktf.IResolvable) {
    this._isShardKeyUnique = value;
  }
  public resetIsShardKeyUnique() {
    this._isShardKeyUnique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isShardKeyUniqueInput() {
    return this._isShardKeyUnique;
  }
}

export class DataMongodbatlasGlobalClusterConfigManagedNamespacesList extends cdktf.ComplexList {
  public internalValue? : DataMongodbatlasGlobalClusterConfigManagedNamespaces[] | cdktf.IResolvable

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
  public get(index: number): DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference {
    return new DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/data-sources/global_cluster_config mongodbatlas_global_cluster_config}
*/
export class DataMongodbatlasGlobalClusterConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_global_cluster_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasGlobalClusterConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasGlobalClusterConfig to import
  * @param importFromId The id of the existing DataMongodbatlasGlobalClusterConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/data-sources/global_cluster_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasGlobalClusterConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_global_cluster_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/data-sources/global_cluster_config mongodbatlas_global_cluster_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasGlobalClusterConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasGlobalClusterConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_global_cluster_config',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.28.0',
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
    this._clusterName = config.clusterName;
    this._id = config.id;
    this._projectId = config.projectId;
    this._managedNamespaces.internalValue = config.managedNamespaces;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // custom_zone_mapping - computed: true, optional: false, required: false
  private _customZoneMapping = new cdktf.StringMap(this, "custom_zone_mapping");
  public get customZoneMapping() {
    return this._customZoneMapping;
  }

  // custom_zone_mapping_zone_id - computed: true, optional: false, required: false
  private _customZoneMappingZoneId = new cdktf.StringMap(this, "custom_zone_mapping_zone_id");
  public get customZoneMappingZoneId() {
    return this._customZoneMappingZoneId;
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

  // managed_namespaces - computed: false, optional: true, required: false
  private _managedNamespaces = new DataMongodbatlasGlobalClusterConfigManagedNamespacesList(this, "managed_namespaces", true);
  public get managedNamespaces() {
    return this._managedNamespaces;
  }
  public putManagedNamespaces(value: DataMongodbatlasGlobalClusterConfigManagedNamespaces[] | cdktf.IResolvable) {
    this._managedNamespaces.internalValue = value;
  }
  public resetManagedNamespaces() {
    this._managedNamespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedNamespacesInput() {
    return this._managedNamespaces.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      managed_namespaces: cdktf.listMapper(dataMongodbatlasGlobalClusterConfigManagedNamespacesToTerraform, true)(this._managedNamespaces.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_namespaces: {
        value: cdktf.listMapperHcl(dataMongodbatlasGlobalClusterConfigManagedNamespacesToHclTerraform, true)(this._managedNamespaces.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataMongodbatlasGlobalClusterConfigManagedNamespacesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
