# `organization` Submodule <a name="`organization` Submodule" id="@cdktf/provider-mongodbatlas.organization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Organization <a name="Organization" id="@cdktf/provider-mongodbatlas.organization.Organization"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization mongodbatlas_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import organization

organization.Organization(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  name: str,
  org_owner_id: str,
  role_names: typing.List[str],
  api_access_list_required: typing.Union[bool, IResolvable] = None,
  federation_settings_id: str = None,
  gen_ai_features_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  multi_factor_auth_required: typing.Union[bool, IResolvable] = None,
  restrict_employee_access: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#description Organization#description}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#name Organization#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.orgOwnerId">org_owner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#org_owner_id Organization#org_owner_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.roleNames">role_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#role_names Organization#role_names}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.apiAccessListRequired">api_access_list_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#api_access_list_required Organization#api_access_list_required}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#federation_settings_id Organization#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.genAiFeaturesEnabled">gen_ai_features_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#gen_ai_features_enabled Organization#gen_ai_features_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#id Organization#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.multiFactorAuthRequired">multi_factor_auth_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#multi_factor_auth_required Organization#multi_factor_auth_required}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.restrictEmployeeAccess">restrict_employee_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#restrict_employee_access Organization#restrict_employee_access}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#description Organization#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#name Organization#name}.

---

##### `org_owner_id`<sup>Required</sup> <a name="org_owner_id" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.orgOwnerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#org_owner_id Organization#org_owner_id}.

---

##### `role_names`<sup>Required</sup> <a name="role_names" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.roleNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#role_names Organization#role_names}.

---

##### `api_access_list_required`<sup>Optional</sup> <a name="api_access_list_required" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.apiAccessListRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#api_access_list_required Organization#api_access_list_required}.

---

##### `federation_settings_id`<sup>Optional</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.federationSettingsId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#federation_settings_id Organization#federation_settings_id}.

---

##### `gen_ai_features_enabled`<sup>Optional</sup> <a name="gen_ai_features_enabled" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.genAiFeaturesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#gen_ai_features_enabled Organization#gen_ai_features_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#id Organization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multi_factor_auth_required`<sup>Optional</sup> <a name="multi_factor_auth_required" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.multiFactorAuthRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#multi_factor_auth_required Organization#multi_factor_auth_required}.

---

##### `restrict_employee_access`<sup>Optional</sup> <a name="restrict_employee_access" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.restrictEmployeeAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#restrict_employee_access Organization#restrict_employee_access}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetApiAccessListRequired">reset_api_access_list_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetFederationSettingsId">reset_federation_settings_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetGenAiFeaturesEnabled">reset_gen_ai_features_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetMultiFactorAuthRequired">reset_multi_factor_auth_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetRestrictEmployeeAccess">reset_restrict_employee_access</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.organization.Organization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.organization.Organization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.organization.Organization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.organization.Organization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.organization.Organization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.organization.Organization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.organization.Organization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.organization.Organization.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.organization.Organization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.organization.Organization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-mongodbatlas.organization.Organization.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.organization.Organization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-mongodbatlas.organization.Organization.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-mongodbatlas.organization.Organization.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.organization.Organization.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.organization.Organization.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.organization.Organization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.organization.Organization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-mongodbatlas.organization.Organization.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.organization.Organization.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-mongodbatlas.organization.Organization.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.organization.Organization.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.organization.Organization.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-mongodbatlas.organization.Organization.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.organization.Organization.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_api_access_list_required` <a name="reset_api_access_list_required" id="@cdktf/provider-mongodbatlas.organization.Organization.resetApiAccessListRequired"></a>

```python
def reset_api_access_list_required() -> None
```

##### `reset_federation_settings_id` <a name="reset_federation_settings_id" id="@cdktf/provider-mongodbatlas.organization.Organization.resetFederationSettingsId"></a>

```python
def reset_federation_settings_id() -> None
```

##### `reset_gen_ai_features_enabled` <a name="reset_gen_ai_features_enabled" id="@cdktf/provider-mongodbatlas.organization.Organization.resetGenAiFeaturesEnabled"></a>

```python
def reset_gen_ai_features_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.organization.Organization.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_multi_factor_auth_required` <a name="reset_multi_factor_auth_required" id="@cdktf/provider-mongodbatlas.organization.Organization.resetMultiFactorAuthRequired"></a>

```python
def reset_multi_factor_auth_required() -> None
```

##### `reset_restrict_employee_access` <a name="reset_restrict_employee_access" id="@cdktf/provider-mongodbatlas.organization.Organization.resetRestrictEmployeeAccess"></a>

```python
def reset_restrict_employee_access() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.organization.Organization.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import organization

organization.Organization.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.organization.Organization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.organization.Organization.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import organization

organization.Organization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.organization.Organization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-mongodbatlas.organization.Organization.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import organization

organization.Organization.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.organization.Organization.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.organization.Organization.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import organization

organization.Organization.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.organization.Organization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.organization.Organization.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Organization to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.organization.Organization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Organization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.organization.Organization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Organization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.apiAccessListRequiredInput">api_access_list_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.federationSettingsIdInput">federation_settings_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.genAiFeaturesEnabledInput">gen_ai_features_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.multiFactorAuthRequiredInput">multi_factor_auth_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.orgOwnerIdInput">org_owner_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.restrictEmployeeAccessInput">restrict_employee_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.roleNamesInput">role_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.apiAccessListRequired">api_access_list_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.genAiFeaturesEnabled">gen_ai_features_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.multiFactorAuthRequired">multi_factor_auth_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.orgOwnerId">org_owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.restrictEmployeeAccess">restrict_employee_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.roleNames">role_names</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.organization.Organization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.organization.Organization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.organization.Organization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.organization.Organization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.organization.Organization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.organization.Organization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.organization.Organization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.organization.Organization.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.organization.Organization.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.organization.Organization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.organization.Organization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.organization.Organization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.organization.Organization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.organization.Organization.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.organization.Organization.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-mongodbatlas.organization.Organization.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-mongodbatlas.organization.Organization.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `api_access_list_required_input`<sup>Optional</sup> <a name="api_access_list_required_input" id="@cdktf/provider-mongodbatlas.organization.Organization.property.apiAccessListRequiredInput"></a>

```python
api_access_list_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-mongodbatlas.organization.Organization.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `federation_settings_id_input`<sup>Optional</sup> <a name="federation_settings_id_input" id="@cdktf/provider-mongodbatlas.organization.Organization.property.federationSettingsIdInput"></a>

```python
federation_settings_id_input: str
```

- *Type:* str

---

##### `gen_ai_features_enabled_input`<sup>Optional</sup> <a name="gen_ai_features_enabled_input" id="@cdktf/provider-mongodbatlas.organization.Organization.property.genAiFeaturesEnabledInput"></a>

```python
gen_ai_features_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.organization.Organization.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `multi_factor_auth_required_input`<sup>Optional</sup> <a name="multi_factor_auth_required_input" id="@cdktf/provider-mongodbatlas.organization.Organization.property.multiFactorAuthRequiredInput"></a>

```python
multi_factor_auth_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-mongodbatlas.organization.Organization.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `org_owner_id_input`<sup>Optional</sup> <a name="org_owner_id_input" id="@cdktf/provider-mongodbatlas.organization.Organization.property.orgOwnerIdInput"></a>

```python
org_owner_id_input: str
```

- *Type:* str

---

##### `restrict_employee_access_input`<sup>Optional</sup> <a name="restrict_employee_access_input" id="@cdktf/provider-mongodbatlas.organization.Organization.property.restrictEmployeeAccessInput"></a>

```python
restrict_employee_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `role_names_input`<sup>Optional</sup> <a name="role_names_input" id="@cdktf/provider-mongodbatlas.organization.Organization.property.roleNamesInput"></a>

```python
role_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_access_list_required`<sup>Required</sup> <a name="api_access_list_required" id="@cdktf/provider-mongodbatlas.organization.Organization.property.apiAccessListRequired"></a>

```python
api_access_list_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-mongodbatlas.organization.Organization.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.organization.Organization.property.federationSettingsId"></a>

```python
federation_settings_id: str
```

- *Type:* str

---

##### `gen_ai_features_enabled`<sup>Required</sup> <a name="gen_ai_features_enabled" id="@cdktf/provider-mongodbatlas.organization.Organization.property.genAiFeaturesEnabled"></a>

```python
gen_ai_features_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.organization.Organization.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `multi_factor_auth_required`<sup>Required</sup> <a name="multi_factor_auth_required" id="@cdktf/provider-mongodbatlas.organization.Organization.property.multiFactorAuthRequired"></a>

```python
multi_factor_auth_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.organization.Organization.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `org_owner_id`<sup>Required</sup> <a name="org_owner_id" id="@cdktf/provider-mongodbatlas.organization.Organization.property.orgOwnerId"></a>

```python
org_owner_id: str
```

- *Type:* str

---

##### `restrict_employee_access`<sup>Required</sup> <a name="restrict_employee_access" id="@cdktf/provider-mongodbatlas.organization.Organization.property.restrictEmployeeAccess"></a>

```python
restrict_employee_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `role_names`<sup>Required</sup> <a name="role_names" id="@cdktf/provider-mongodbatlas.organization.Organization.property.roleNames"></a>

```python
role_names: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.organization.Organization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationConfig <a name="OrganizationConfig" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import organization

organization.OrganizationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  name: str,
  org_owner_id: str,
  role_names: typing.List[str],
  api_access_list_required: typing.Union[bool, IResolvable] = None,
  federation_settings_id: str = None,
  gen_ai_features_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  multi_factor_auth_required: typing.Union[bool, IResolvable] = None,
  restrict_employee_access: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#description Organization#description}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#name Organization#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.orgOwnerId">org_owner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#org_owner_id Organization#org_owner_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.roleNames">role_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#role_names Organization#role_names}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.apiAccessListRequired">api_access_list_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#api_access_list_required Organization#api_access_list_required}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#federation_settings_id Organization#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.genAiFeaturesEnabled">gen_ai_features_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#gen_ai_features_enabled Organization#gen_ai_features_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#id Organization#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.multiFactorAuthRequired">multi_factor_auth_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#multi_factor_auth_required Organization#multi_factor_auth_required}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.restrictEmployeeAccess">restrict_employee_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#restrict_employee_access Organization#restrict_employee_access}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#description Organization#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#name Organization#name}.

---

##### `org_owner_id`<sup>Required</sup> <a name="org_owner_id" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.orgOwnerId"></a>

```python
org_owner_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#org_owner_id Organization#org_owner_id}.

---

##### `role_names`<sup>Required</sup> <a name="role_names" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.roleNames"></a>

```python
role_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#role_names Organization#role_names}.

---

##### `api_access_list_required`<sup>Optional</sup> <a name="api_access_list_required" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.apiAccessListRequired"></a>

```python
api_access_list_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#api_access_list_required Organization#api_access_list_required}.

---

##### `federation_settings_id`<sup>Optional</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.federationSettingsId"></a>

```python
federation_settings_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#federation_settings_id Organization#federation_settings_id}.

---

##### `gen_ai_features_enabled`<sup>Optional</sup> <a name="gen_ai_features_enabled" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.genAiFeaturesEnabled"></a>

```python
gen_ai_features_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#gen_ai_features_enabled Organization#gen_ai_features_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#id Organization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multi_factor_auth_required`<sup>Optional</sup> <a name="multi_factor_auth_required" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.multiFactorAuthRequired"></a>

```python
multi_factor_auth_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#multi_factor_auth_required Organization#multi_factor_auth_required}.

---

##### `restrict_employee_access`<sup>Optional</sup> <a name="restrict_employee_access" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.restrictEmployeeAccess"></a>

```python
restrict_employee_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/organization#restrict_employee_access Organization#restrict_employee_access}.

---



