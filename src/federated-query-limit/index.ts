/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/federated_query_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FederatedQueryLimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/federated_query_limit#default_limit FederatedQueryLimit#default_limit}
  */
  readonly defaultLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/federated_query_limit#id FederatedQueryLimit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/federated_query_limit#limit_name FederatedQueryLimit#limit_name}
  */
  readonly limitName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/federated_query_limit#maximum_limit FederatedQueryLimit#maximum_limit}
  */
  readonly maximumLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/federated_query_limit#overrun_policy FederatedQueryLimit#overrun_policy}
  */
  readonly overrunPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/federated_query_limit#project_id FederatedQueryLimit#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/federated_query_limit#tenant_name FederatedQueryLimit#tenant_name}
  */
  readonly tenantName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/federated_query_limit#value FederatedQueryLimit#value}
  */
  readonly value: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/federated_query_limit mongodbatlas_federated_query_limit}
*/
export class FederatedQueryLimit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_federated_query_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FederatedQueryLimit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FederatedQueryLimit to import
  * @param importFromId The id of the existing FederatedQueryLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/federated_query_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FederatedQueryLimit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_federated_query_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/federated_query_limit mongodbatlas_federated_query_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FederatedQueryLimitConfig
  */
  public constructor(scope: Construct, id: string, config: FederatedQueryLimitConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_federated_query_limit',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.21.3',
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
    this._defaultLimit = config.defaultLimit;
    this._id = config.id;
    this._limitName = config.limitName;
    this._maximumLimit = config.maximumLimit;
    this._overrunPolicy = config.overrunPolicy;
    this._projectId = config.projectId;
    this._tenantName = config.tenantName;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // current_usage - computed: true, optional: false, required: false
  public get currentUsage() {
    return this.getNumberAttribute('current_usage');
  }

  // default_limit - computed: false, optional: true, required: false
  private _defaultLimit?: number; 
  public get defaultLimit() {
    return this.getNumberAttribute('default_limit');
  }
  public set defaultLimit(value: number) {
    this._defaultLimit = value;
  }
  public resetDefaultLimit() {
    this._defaultLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLimitInput() {
    return this._defaultLimit;
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

  // maximum_limit - computed: false, optional: true, required: false
  private _maximumLimit?: number; 
  public get maximumLimit() {
    return this.getNumberAttribute('maximum_limit');
  }
  public set maximumLimit(value: number) {
    this._maximumLimit = value;
  }
  public resetMaximumLimit() {
    this._maximumLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumLimitInput() {
    return this._maximumLimit;
  }

  // overrun_policy - computed: false, optional: false, required: true
  private _overrunPolicy?: string; 
  public get overrunPolicy() {
    return this.getStringAttribute('overrun_policy');
  }
  public set overrunPolicy(value: string) {
    this._overrunPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrunPolicyInput() {
    return this._overrunPolicy;
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_limit: cdktf.numberToTerraform(this._defaultLimit),
      id: cdktf.stringToTerraform(this._id),
      limit_name: cdktf.stringToTerraform(this._limitName),
      maximum_limit: cdktf.numberToTerraform(this._maximumLimit),
      overrun_policy: cdktf.stringToTerraform(this._overrunPolicy),
      project_id: cdktf.stringToTerraform(this._projectId),
      tenant_name: cdktf.stringToTerraform(this._tenantName),
      value: cdktf.numberToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_limit: {
        value: cdktf.numberToHclTerraform(this._defaultLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      maximum_limit: {
        value: cdktf.numberToHclTerraform(this._maximumLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      overrun_policy: {
        value: cdktf.stringToHclTerraform(this._overrunPolicy),
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
      value: {
        value: cdktf.numberToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
