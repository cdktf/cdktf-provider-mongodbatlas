/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/organization#api_access_list_required Organization#api_access_list_required}
  */
  readonly apiAccessListRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/organization#description Organization#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/organization#federation_settings_id Organization#federation_settings_id}
  */
  readonly federationSettingsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/organization#id Organization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/organization#multi_factor_auth_required Organization#multi_factor_auth_required}
  */
  readonly multiFactorAuthRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/organization#name Organization#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/organization#org_owner_id Organization#org_owner_id}
  */
  readonly orgOwnerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/organization#restrict_employee_access Organization#restrict_employee_access}
  */
  readonly restrictEmployeeAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/organization#role_names Organization#role_names}
  */
  readonly roleNames: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/organization mongodbatlas_organization}
*/
export class Organization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Organization to import
  * @param importFromId The id of the existing Organization that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Organization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/organization mongodbatlas_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_organization',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.20.0',
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
    this._apiAccessListRequired = config.apiAccessListRequired;
    this._description = config.description;
    this._federationSettingsId = config.federationSettingsId;
    this._id = config.id;
    this._multiFactorAuthRequired = config.multiFactorAuthRequired;
    this._name = config.name;
    this._orgOwnerId = config.orgOwnerId;
    this._restrictEmployeeAccess = config.restrictEmployeeAccess;
    this._roleNames = config.roleNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_access_list_required - computed: true, optional: true, required: false
  private _apiAccessListRequired?: boolean | cdktf.IResolvable; 
  public get apiAccessListRequired() {
    return this.getBooleanAttribute('api_access_list_required');
  }
  public set apiAccessListRequired(value: boolean | cdktf.IResolvable) {
    this._apiAccessListRequired = value;
  }
  public resetApiAccessListRequired() {
    this._apiAccessListRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAccessListRequiredInput() {
    return this._apiAccessListRequired;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // federation_settings_id - computed: false, optional: true, required: false
  private _federationSettingsId?: string; 
  public get federationSettingsId() {
    return this.getStringAttribute('federation_settings_id');
  }
  public set federationSettingsId(value: string) {
    this._federationSettingsId = value;
  }
  public resetFederationSettingsId() {
    this._federationSettingsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federationSettingsIdInput() {
    return this._federationSettingsId;
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

  // multi_factor_auth_required - computed: true, optional: true, required: false
  private _multiFactorAuthRequired?: boolean | cdktf.IResolvable; 
  public get multiFactorAuthRequired() {
    return this.getBooleanAttribute('multi_factor_auth_required');
  }
  public set multiFactorAuthRequired(value: boolean | cdktf.IResolvable) {
    this._multiFactorAuthRequired = value;
  }
  public resetMultiFactorAuthRequired() {
    this._multiFactorAuthRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiFactorAuthRequiredInput() {
    return this._multiFactorAuthRequired;
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

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // org_owner_id - computed: false, optional: false, required: true
  private _orgOwnerId?: string; 
  public get orgOwnerId() {
    return this.getStringAttribute('org_owner_id');
  }
  public set orgOwnerId(value: string) {
    this._orgOwnerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgOwnerIdInput() {
    return this._orgOwnerId;
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // restrict_employee_access - computed: true, optional: true, required: false
  private _restrictEmployeeAccess?: boolean | cdktf.IResolvable; 
  public get restrictEmployeeAccess() {
    return this.getBooleanAttribute('restrict_employee_access');
  }
  public set restrictEmployeeAccess(value: boolean | cdktf.IResolvable) {
    this._restrictEmployeeAccess = value;
  }
  public resetRestrictEmployeeAccess() {
    this._restrictEmployeeAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictEmployeeAccessInput() {
    return this._restrictEmployeeAccess;
  }

  // role_names - computed: false, optional: false, required: true
  private _roleNames?: string[]; 
  public get roleNames() {
    return cdktf.Fn.tolist(this.getListAttribute('role_names'));
  }
  public set roleNames(value: string[]) {
    this._roleNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNamesInput() {
    return this._roleNames;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_access_list_required: cdktf.booleanToTerraform(this._apiAccessListRequired),
      description: cdktf.stringToTerraform(this._description),
      federation_settings_id: cdktf.stringToTerraform(this._federationSettingsId),
      id: cdktf.stringToTerraform(this._id),
      multi_factor_auth_required: cdktf.booleanToTerraform(this._multiFactorAuthRequired),
      name: cdktf.stringToTerraform(this._name),
      org_owner_id: cdktf.stringToTerraform(this._orgOwnerId),
      restrict_employee_access: cdktf.booleanToTerraform(this._restrictEmployeeAccess),
      role_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleNames),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_access_list_required: {
        value: cdktf.booleanToHclTerraform(this._apiAccessListRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      federation_settings_id: {
        value: cdktf.stringToHclTerraform(this._federationSettingsId),
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
      multi_factor_auth_required: {
        value: cdktf.booleanToHclTerraform(this._multiFactorAuthRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_owner_id: {
        value: cdktf.stringToHclTerraform(this._orgOwnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrict_employee_access: {
        value: cdktf.booleanToHclTerraform(this._restrictEmployeeAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      role_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roleNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
