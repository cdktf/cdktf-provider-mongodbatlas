// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/auditing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuditingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/auditing#audit_authorization_success Auditing#audit_authorization_success}
  */
  readonly auditAuthorizationSuccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/auditing#audit_filter Auditing#audit_filter}
  */
  readonly auditFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/auditing#enabled Auditing#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/auditing#id Auditing#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/auditing#project_id Auditing#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/auditing mongodbatlas_auditing}
*/
export class Auditing extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_auditing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Auditing resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Auditing to import
  * @param importFromId The id of the existing Auditing that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/auditing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Auditing to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_auditing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/auditing mongodbatlas_auditing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuditingConfig
  */
  public constructor(scope: Construct, id: string, config: AuditingConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_auditing',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.35.1',
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
    this._auditAuthorizationSuccess = config.auditAuthorizationSuccess;
    this._auditFilter = config.auditFilter;
    this._enabled = config.enabled;
    this._id = config.id;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_authorization_success - computed: true, optional: true, required: false
  private _auditAuthorizationSuccess?: boolean | cdktf.IResolvable; 
  public get auditAuthorizationSuccess() {
    return this.getBooleanAttribute('audit_authorization_success');
  }
  public set auditAuthorizationSuccess(value: boolean | cdktf.IResolvable) {
    this._auditAuthorizationSuccess = value;
  }
  public resetAuditAuthorizationSuccess() {
    this._auditAuthorizationSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditAuthorizationSuccessInput() {
    return this._auditAuthorizationSuccess;
  }

  // audit_filter - computed: true, optional: true, required: false
  private _auditFilter?: string; 
  public get auditFilter() {
    return this.getStringAttribute('audit_filter');
  }
  public set auditFilter(value: string) {
    this._auditFilter = value;
  }
  public resetAuditFilter() {
    this._auditFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditFilterInput() {
    return this._auditFilter;
  }

  // configuration_type - computed: true, optional: false, required: false
  public get configurationType() {
    return this.getStringAttribute('configuration_type');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_authorization_success: cdktf.booleanToTerraform(this._auditAuthorizationSuccess),
      audit_filter: cdktf.stringToTerraform(this._auditFilter),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_authorization_success: {
        value: cdktf.booleanToHclTerraform(this._auditAuthorizationSuccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      audit_filter: {
        value: cdktf.stringToHclTerraform(this._auditFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
