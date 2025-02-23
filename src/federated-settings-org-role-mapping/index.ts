/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/federated_settings_org_role_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FederatedSettingsOrgRoleMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/federated_settings_org_role_mapping#external_group_name FederatedSettingsOrgRoleMapping#external_group_name}
  */
  readonly externalGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/federated_settings_org_role_mapping#federation_settings_id FederatedSettingsOrgRoleMapping#federation_settings_id}
  */
  readonly federationSettingsId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/federated_settings_org_role_mapping#org_id FederatedSettingsOrgRoleMapping#org_id}
  */
  readonly orgId: string;
  /**
  * role_assignments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/federated_settings_org_role_mapping#role_assignments FederatedSettingsOrgRoleMapping#role_assignments}
  */
  readonly roleAssignments: FederatedSettingsOrgRoleMappingRoleAssignments[] | cdktf.IResolvable;
}
export interface FederatedSettingsOrgRoleMappingRoleAssignments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/federated_settings_org_role_mapping#group_id FederatedSettingsOrgRoleMapping#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/federated_settings_org_role_mapping#org_id FederatedSettingsOrgRoleMapping#org_id}
  */
  readonly orgId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/federated_settings_org_role_mapping#roles FederatedSettingsOrgRoleMapping#roles}
  */
  readonly roles?: string[];
}

export function federatedSettingsOrgRoleMappingRoleAssignmentsToTerraform(struct?: FederatedSettingsOrgRoleMappingRoleAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
    org_id: cdktf.stringToTerraform(struct!.orgId),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
  }
}


export function federatedSettingsOrgRoleMappingRoleAssignmentsToHclTerraform(struct?: FederatedSettingsOrgRoleMappingRoleAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_id: {
      value: cdktf.stringToHclTerraform(struct!.orgId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FederatedSettingsOrgRoleMappingRoleAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._orgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgId = this._orgId;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedSettingsOrgRoleMappingRoleAssignments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
      this._orgId = undefined;
      this._roles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
      this._orgId = value.orgId;
      this._roles = value.roles;
    }
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }
}

export class FederatedSettingsOrgRoleMappingRoleAssignmentsList extends cdktf.ComplexList {
  public internalValue? : FederatedSettingsOrgRoleMappingRoleAssignments[] | cdktf.IResolvable

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
  public get(index: number): FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference {
    return new FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/federated_settings_org_role_mapping mongodbatlas_federated_settings_org_role_mapping}
*/
export class FederatedSettingsOrgRoleMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_federated_settings_org_role_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FederatedSettingsOrgRoleMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FederatedSettingsOrgRoleMapping to import
  * @param importFromId The id of the existing FederatedSettingsOrgRoleMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/federated_settings_org_role_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FederatedSettingsOrgRoleMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_federated_settings_org_role_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/federated_settings_org_role_mapping mongodbatlas_federated_settings_org_role_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FederatedSettingsOrgRoleMappingConfig
  */
  public constructor(scope: Construct, id: string, config: FederatedSettingsOrgRoleMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_federated_settings_org_role_mapping',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.27.0',
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
    this._externalGroupName = config.externalGroupName;
    this._federationSettingsId = config.federationSettingsId;
    this._orgId = config.orgId;
    this._roleAssignments.internalValue = config.roleAssignments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_group_name - computed: false, optional: false, required: true
  private _externalGroupName?: string; 
  public get externalGroupName() {
    return this.getStringAttribute('external_group_name');
  }
  public set externalGroupName(value: string) {
    this._externalGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalGroupNameInput() {
    return this._externalGroupName;
  }

  // federation_settings_id - computed: false, optional: false, required: true
  private _federationSettingsId?: string; 
  public get federationSettingsId() {
    return this.getStringAttribute('federation_settings_id');
  }
  public set federationSettingsId(value: string) {
    this._federationSettingsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get federationSettingsIdInput() {
    return this._federationSettingsId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // role_mapping_id - computed: true, optional: false, required: false
  public get roleMappingId() {
    return this.getStringAttribute('role_mapping_id');
  }

  // role_assignments - computed: false, optional: false, required: true
  private _roleAssignments = new FederatedSettingsOrgRoleMappingRoleAssignmentsList(this, "role_assignments", true);
  public get roleAssignments() {
    return this._roleAssignments;
  }
  public putRoleAssignments(value: FederatedSettingsOrgRoleMappingRoleAssignments[] | cdktf.IResolvable) {
    this._roleAssignments.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleAssignmentsInput() {
    return this._roleAssignments.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_group_name: cdktf.stringToTerraform(this._externalGroupName),
      federation_settings_id: cdktf.stringToTerraform(this._federationSettingsId),
      org_id: cdktf.stringToTerraform(this._orgId),
      role_assignments: cdktf.listMapper(federatedSettingsOrgRoleMappingRoleAssignmentsToTerraform, true)(this._roleAssignments.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_group_name: {
        value: cdktf.stringToHclTerraform(this._externalGroupName),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_assignments: {
        value: cdktf.listMapperHcl(federatedSettingsOrgRoleMappingRoleAssignmentsToHclTerraform, true)(this._roleAssignments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FederatedSettingsOrgRoleMappingRoleAssignmentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
