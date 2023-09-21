// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limits
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasFederatedQueryLimitsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limits#id DataMongodbatlasFederatedQueryLimits#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limits#project_id DataMongodbatlasFederatedQueryLimits#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limits#tenant_name DataMongodbatlasFederatedQueryLimits#tenant_name}
  */
  readonly tenantName: string;
}
export interface DataMongodbatlasFederatedQueryLimitsResults {
}

export function dataMongodbatlasFederatedQueryLimitsResultsToTerraform(struct?: DataMongodbatlasFederatedQueryLimitsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasFederatedQueryLimitsResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasFederatedQueryLimitsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedQueryLimitsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_usage - computed: true, optional: false, required: false
  public get currentUsage() {
    return this.getNumberAttribute('current_usage');
  }

  // default_limit - computed: true, optional: false, required: false
  public get defaultLimit() {
    return this.getNumberAttribute('default_limit');
  }

  // last_modified_date - computed: true, optional: false, required: false
  public get lastModifiedDate() {
    return this.getStringAttribute('last_modified_date');
  }

  // limit_name - computed: true, optional: false, required: false
  public get limitName() {
    return this.getStringAttribute('limit_name');
  }

  // maximum_limit - computed: true, optional: false, required: false
  public get maximumLimit() {
    return this.getNumberAttribute('maximum_limit');
  }

  // overrun_policy - computed: true, optional: false, required: false
  public get overrunPolicy() {
    return this.getStringAttribute('overrun_policy');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // tenant_name - computed: true, optional: false, required: false
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataMongodbatlasFederatedQueryLimitsResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedQueryLimitsResultsOutputReference {
    return new DataMongodbatlasFederatedQueryLimitsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limits mongodbatlas_federated_query_limits}
*/
export class DataMongodbatlasFederatedQueryLimits extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_federated_query_limits";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/data-sources/federated_query_limits mongodbatlas_federated_query_limits} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasFederatedQueryLimitsConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasFederatedQueryLimitsConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_federated_query_limits',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.12.0',
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
    this._tenantName = config.tenantName;
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
  private _results = new DataMongodbatlasFederatedQueryLimitsResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // tenant_name - computed: false, optional: false, required: true
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      tenant_name: cdktf.stringToTerraform(this._tenantName),
    };
  }
}
