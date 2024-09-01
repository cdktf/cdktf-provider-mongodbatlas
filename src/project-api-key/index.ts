// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/project_api_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/project_api_key#description ProjectApiKey#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/project_api_key#id ProjectApiKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * project_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/project_api_key#project_assignment ProjectApiKey#project_assignment}
  */
  readonly projectAssignment: ProjectApiKeyProjectAssignment[] | cdktf.IResolvable;
}
export interface ProjectApiKeyProjectAssignment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/project_api_key#project_id ProjectApiKey#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/project_api_key#role_names ProjectApiKey#role_names}
  */
  readonly roleNames: string[];
}

export function projectApiKeyProjectAssignmentToTerraform(struct?: ProjectApiKeyProjectAssignment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    role_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roleNames),
  }
}


export function projectApiKeyProjectAssignmentToHclTerraform(struct?: ProjectApiKeyProjectAssignment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roleNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectApiKeyProjectAssignmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectApiKeyProjectAssignment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._roleNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleNames = this._roleNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectApiKeyProjectAssignment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
      this._roleNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
      this._roleNames = value.roleNames;
    }
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
}

export class ProjectApiKeyProjectAssignmentList extends cdktf.ComplexList {
  public internalValue? : ProjectApiKeyProjectAssignment[] | cdktf.IResolvable

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
  public get(index: number): ProjectApiKeyProjectAssignmentOutputReference {
    return new ProjectApiKeyProjectAssignmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/project_api_key mongodbatlas_project_api_key}
*/
export class ProjectApiKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_project_api_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectApiKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectApiKey to import
  * @param importFromId The id of the existing ProjectApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/project_api_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectApiKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_project_api_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/project_api_key mongodbatlas_project_api_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectApiKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_project_api_key',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.18.1',
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
    this._description = config.description;
    this._id = config.id;
    this._projectAssignment.internalValue = config.projectAssignment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key_id - computed: true, optional: false, required: false
  public get apiKeyId() {
    return this.getStringAttribute('api_key_id');
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

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // project_assignment - computed: false, optional: false, required: true
  private _projectAssignment = new ProjectApiKeyProjectAssignmentList(this, "project_assignment", true);
  public get projectAssignment() {
    return this._projectAssignment;
  }
  public putProjectAssignment(value: ProjectApiKeyProjectAssignment[] | cdktf.IResolvable) {
    this._projectAssignment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectAssignmentInput() {
    return this._projectAssignment.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      project_assignment: cdktf.listMapper(projectApiKeyProjectAssignmentToTerraform, true)(this._projectAssignment.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      project_assignment: {
        value: cdktf.listMapperHcl(projectApiKeyProjectAssignmentToHclTerraform, true)(this._projectAssignment.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectApiKeyProjectAssignmentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
