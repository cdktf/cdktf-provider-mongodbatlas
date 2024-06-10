// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/federated_query_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasFederatedQueryLimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/federated_query_limit#id DataMongodbatlasFederatedQueryLimit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/federated_query_limit#limit_name DataMongodbatlasFederatedQueryLimit#limit_name}
  */
  readonly limitName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/federated_query_limit#project_id DataMongodbatlasFederatedQueryLimit#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/federated_query_limit#tenant_name DataMongodbatlasFederatedQueryLimit#tenant_name}
  */
  readonly tenantName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/federated_query_limit mongodbatlas_federated_query_limit}
*/
export class DataMongodbatlasFederatedQueryLimit extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_federated_query_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasFederatedQueryLimit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasFederatedQueryLimit to import
  * @param importFromId The id of the existing DataMongodbatlasFederatedQueryLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/federated_query_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasFederatedQueryLimit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_federated_query_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/federated_query_limit mongodbatlas_federated_query_limit} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasFederatedQueryLimitConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasFederatedQueryLimitConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_federated_query_limit',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.16.2',
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
    this._limitName = config.limitName;
    this._projectId = config.projectId;
    this._tenantName = config.tenantName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // current_usage - computed: true, optional: false, required: false
  public get currentUsage() {
    return this.getNumberAttribute('current_usage');
  }

  // default_limit - computed: true, optional: false, required: false
  public get defaultLimit() {
    return this.getNumberAttribute('default_limit');
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

  // last_modified_date - computed: true, optional: false, required: false
  public get lastModifiedDate() {
    return this.getStringAttribute('last_modified_date');
  }

  // limit_name - computed: false, optional: false, required: true
  private _limitName?: string; 
  public get limitName() {
    return this.getStringAttribute('limit_name');
  }
  public set limitName(value: string) {
    this._limitName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitNameInput() {
    return this._limitName;
  }

  // maximum_limit - computed: true, optional: false, required: false
  public get maximumLimit() {
    return this.getNumberAttribute('maximum_limit');
  }

  // overrun_policy - computed: true, optional: false, required: false
  public get overrunPolicy() {
    return this.getStringAttribute('overrun_policy');
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      limit_name: cdktf.stringToTerraform(this._limitName),
      project_id: cdktf.stringToTerraform(this._projectId),
      tenant_name: cdktf.stringToTerraform(this._tenantName),
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
      limit_name: {
        value: cdktf.stringToHclTerraform(this._limitName),
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
      tenant_name: {
        value: cdktf.stringToHclTerraform(this._tenantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
