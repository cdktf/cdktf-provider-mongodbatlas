# `federatedSettingsOrgRoleMapping` Submodule <a name="`federatedSettingsOrgRoleMapping` Submodule" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FederatedSettingsOrgRoleMapping <a name="FederatedSettingsOrgRoleMapping" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_role_mapping mongodbatlas_federated_settings_org_role_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import federated_settings_org_role_mapping

federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  external_group_name: str,
  federation_settings_id: str,
  org_id: str,
  role_assignments: IResolvable | typing.List[FederatedSettingsOrgRoleMappingRoleAssignments]
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.externalGroupName">external_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_role_mapping#external_group_name FederatedSettingsOrgRoleMapping#external_group_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_role_mapping#federation_settings_id FederatedSettingsOrgRoleMapping#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_role_mapping#org_id FederatedSettingsOrgRoleMapping#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.roleAssignments">role_assignments</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments">FederatedSettingsOrgRoleMappingRoleAssignments</a>]</code> | role_assignments block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `external_group_name`<sup>Required</sup> <a name="external_group_name" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.externalGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_role_mapping#external_group_name FederatedSettingsOrgRoleMapping#external_group_name}.

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.federationSettingsId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_role_mapping#federation_settings_id FederatedSettingsOrgRoleMapping#federation_settings_id}.

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.orgId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_role_mapping#org_id FederatedSettingsOrgRoleMapping#org_id}.

---

##### `role_assignments`<sup>Required</sup> <a name="role_assignments" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.roleAssignments"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments">FederatedSettingsOrgRoleMappingRoleAssignments</a>]

role_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_role_mapping#role_assignments FederatedSettingsOrgRoleMapping#role_assignments}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.putRoleAssignments">put_role_assignments</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_role_assignments` <a name="put_role_assignments" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.putRoleAssignments"></a>

```python
def put_role_assignments(
  value: IResolvable | typing.List[FederatedSettingsOrgRoleMappingRoleAssignments]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.putRoleAssignments.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments">FederatedSettingsOrgRoleMappingRoleAssignments</a>]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FederatedSettingsOrgRoleMapping resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import federated_settings_org_role_mapping

federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import federated_settings_org_role_mapping

federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import federated_settings_org_role_mapping

federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import federated_settings_org_role_mapping

federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FederatedSettingsOrgRoleMapping resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FederatedSettingsOrgRoleMapping to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FederatedSettingsOrgRoleMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_role_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FederatedSettingsOrgRoleMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.roleAssignments">role_assignments</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList">FederatedSettingsOrgRoleMappingRoleAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.roleMappingId">role_mapping_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.externalGroupNameInput">external_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.federationSettingsIdInput">federation_settings_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.roleAssignmentsInput">role_assignments_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments">FederatedSettingsOrgRoleMappingRoleAssignments</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.externalGroupName">external_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `role_assignments`<sup>Required</sup> <a name="role_assignments" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.roleAssignments"></a>

```python
role_assignments: FederatedSettingsOrgRoleMappingRoleAssignmentsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList">FederatedSettingsOrgRoleMappingRoleAssignmentsList</a>

---

##### `role_mapping_id`<sup>Required</sup> <a name="role_mapping_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.roleMappingId"></a>

```python
role_mapping_id: str
```

- *Type:* str

---

##### `external_group_name_input`<sup>Optional</sup> <a name="external_group_name_input" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.externalGroupNameInput"></a>

```python
external_group_name_input: str
```

- *Type:* str

---

##### `federation_settings_id_input`<sup>Optional</sup> <a name="federation_settings_id_input" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.federationSettingsIdInput"></a>

```python
federation_settings_id_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `role_assignments_input`<sup>Optional</sup> <a name="role_assignments_input" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.roleAssignmentsInput"></a>

```python
role_assignments_input: IResolvable | typing.List[FederatedSettingsOrgRoleMappingRoleAssignments]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments">FederatedSettingsOrgRoleMappingRoleAssignments</a>]

---

##### `external_group_name`<sup>Required</sup> <a name="external_group_name" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.externalGroupName"></a>

```python
external_group_name: str
```

- *Type:* str

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.federationSettingsId"></a>

```python
federation_settings_id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FederatedSettingsOrgRoleMappingConfig <a name="FederatedSettingsOrgRoleMappingConfig" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import federated_settings_org_role_mapping

federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  external_group_name: str,
  federation_settings_id: str,
  org_id: str,
  role_assignments: IResolvable | typing.List[FederatedSettingsOrgRoleMappingRoleAssignments]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.externalGroupName">external_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_role_mapping#external_group_name FederatedSettingsOrgRoleMapping#external_group_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_role_mapping#federation_settings_id FederatedSettingsOrgRoleMapping#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.orgId">org_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_role_mapping#org_id FederatedSettingsOrgRoleMapping#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.roleAssignments">role_assignments</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments">FederatedSettingsOrgRoleMappingRoleAssignments</a>]</code> | role_assignments block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `external_group_name`<sup>Required</sup> <a name="external_group_name" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.externalGroupName"></a>

```python
external_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_role_mapping#external_group_name FederatedSettingsOrgRoleMapping#external_group_name}.

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.federationSettingsId"></a>

```python
federation_settings_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_role_mapping#federation_settings_id FederatedSettingsOrgRoleMapping#federation_settings_id}.

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_role_mapping#org_id FederatedSettingsOrgRoleMapping#org_id}.

---

##### `role_assignments`<sup>Required</sup> <a name="role_assignments" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.roleAssignments"></a>

```python
role_assignments: IResolvable | typing.List[FederatedSettingsOrgRoleMappingRoleAssignments]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments">FederatedSettingsOrgRoleMappingRoleAssignments</a>]

role_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_role_mapping#role_assignments FederatedSettingsOrgRoleMapping#role_assignments}

---

### FederatedSettingsOrgRoleMappingRoleAssignments <a name="FederatedSettingsOrgRoleMappingRoleAssignments" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import federated_settings_org_role_mapping

federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments(
  group_id: str = None,
  org_id: str = None,
  roles: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments.property.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_role_mapping#group_id FederatedSettingsOrgRoleMapping#group_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments.property.orgId">org_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_role_mapping#org_id FederatedSettingsOrgRoleMapping#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments.property.roles">roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_role_mapping#roles FederatedSettingsOrgRoleMapping#roles}. |

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_role_mapping#group_id FederatedSettingsOrgRoleMapping#group_id}.

---

##### `org_id`<sup>Optional</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_role_mapping#org_id FederatedSettingsOrgRoleMapping#org_id}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_role_mapping#roles FederatedSettingsOrgRoleMapping#roles}.

---

## Classes <a name="Classes" id="Classes"></a>

### FederatedSettingsOrgRoleMappingRoleAssignmentsList <a name="FederatedSettingsOrgRoleMappingRoleAssignmentsList" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import federated_settings_org_role_mapping

federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments">FederatedSettingsOrgRoleMappingRoleAssignments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FederatedSettingsOrgRoleMappingRoleAssignments]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments">FederatedSettingsOrgRoleMappingRoleAssignments</a>]

---


### FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference <a name="FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import federated_settings_org_role_mapping

federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resetOrgId">reset_org_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resetRoles">reset_roles</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_id` <a name="reset_group_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_org_id` <a name="reset_org_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resetOrgId"></a>

```python
def reset_org_id() -> None
```

##### `reset_roles` <a name="reset_roles" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resetRoles"></a>

```python
def reset_roles() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments">FederatedSettingsOrgRoleMappingRoleAssignments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FederatedSettingsOrgRoleMappingRoleAssignments
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments">FederatedSettingsOrgRoleMappingRoleAssignments</a>

---



